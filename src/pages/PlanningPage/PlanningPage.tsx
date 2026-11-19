import type { EventClickInfo } from "@fullcalendar/react";
import { Planning } from "../../features/planning/components/Planning/Planning";
import { Modal } from "../../shared/components/Modale/Modale";
import { useToggle } from "../../shared/hooks/useToggle";
import { selectPlannedRecipes } from "../../store/createPlannedRecipesSlice";
import { useRecipeStore } from "../../store/useRecipeStore";
import { useState } from "react";
import { EventModale } from "../../features/planning/components/EventModale/EventModale";

export const PlanningPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventClickInfo | null>(null)
  const eventModal = useToggle();
  const plannedRecipes = useRecipeStore(selectPlannedRecipes);

  return (
    <>
      <h2 className="text-center text-2xl mb-4">Mon planning</h2>
      <Planning events={plannedRecipes} openEventModal={eventModal.toggle} selectEvent={setSelectedEvent} />

      <Modal
        open={eventModal.isOn}
        onClose={eventModal.toggle}
        title={`Recette du ${selectedEvent?.event.start?.toLocaleDateString()}`}
      >
        <EventModale event={selectedEvent} closeModal={() => eventModal.setIsOn(false)}/>
      </Modal>
    </>
  );
};
