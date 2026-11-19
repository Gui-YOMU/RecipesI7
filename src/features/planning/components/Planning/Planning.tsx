import FullCalendar, {
  type EventInput,
} from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/forma";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import interactionPlugin from "@fullcalendar/react/interaction";
import type { PlanningProps } from "../../types/planningTypes";
import { useRecipeStore } from "../../../../store/useRecipeStore.ts";
import { formatDateToString } from "../../../../shared/utils/dateUtils.ts";
import { selectUpdateRecipeAndIngredientsDate } from "../../../../store/createPlannedRecipeAndIngredientsSlice.ts";

export const Planning = ({
  events,
  openEventModal,
  selectEvent,
}: PlanningProps) => {
  const eventsList: EventInput[] = events.map((event) => ({
    title: event.recipe.strMeal,
    date: event.date,
    id: event.id.toString(),
  }));

  const updateRecipeandIngredients = useRecipeStore(selectUpdateRecipeAndIngredientsDate)

  return (
    <>
      <FullCalendar
        plugins={[themePlugin, dayGridPlugin, interactionPlugin]}
        contentHeight={"100dvh"}
        initialView="dayGridMonth"
        firstDay={1}
        locale="fr"
        editable={true}
        events={eventsList}
        eventDrop={(eventDropInfo) => {
          if (eventDropInfo.event.start) {
            updateRecipeandIngredients(
              parseInt(eventDropInfo.event.id, 10),
              formatDateToString(eventDropInfo.event.start),
            );
          }
        }}
        eventClick={(eventClickInfo) => {
          selectEvent(eventClickInfo);
          openEventModal();
        }}
      />
    </>
  );
};
