import * as CardUI from "~/components/ui/card";

export function ArticleCard({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <CardUI.Root>
      <CardUI.Header>
        <CardUI.Title>{title}</CardUI.Title>
        {description && <CardUI.Description>{description}</CardUI.Description>}
      </CardUI.Header>
      <CardUI.Body>
        <p>TODO: image add</p>
      </CardUI.Body>
    </CardUI.Root>
  );
}
