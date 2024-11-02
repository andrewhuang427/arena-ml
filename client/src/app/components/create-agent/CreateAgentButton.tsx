import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FormEvent } from "react";

export default function CreateAgentButton() {
  const [opened, { open, close }] = useDisclosure();

  function handleCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    close();
  }

  return (
    <>
      <Button onClick={open}>Create Agent</Button>
      <Modal opened={opened} onClose={close} title="Create Agent">
        <form onSubmit={handleCreate} className="flex flex-col gap-4">
          <TextInput label="Name" placeholder="Agent Name" />
          <Textarea label="System Prompt" placeholder="Agent Instructions" />
          <Textarea label="Instructions" placeholder="Agent Instructions" />
          <Button type="submit">Create</Button>
        </form>
      </Modal>
    </>
  );
}
