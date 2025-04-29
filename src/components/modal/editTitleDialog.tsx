import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EditTitleDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	titleValue: string;
	onSave: (title: string) => void;
}

export default function EditTitleDialog({
	open,
	onOpenChange,
	titleValue,
	onSave,
}: EditTitleDialogProps) {
	return (
		<div>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Edit Chat Title</DialogTitle>
					</DialogHeader>
					<div className="py-4">
						<Input
							defaultValue={titleValue}
							placeholder="Enter chat title"
							className="w-full"
							autoFocus
						/>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => onOpenChange(false)}>
							Cancel
						</Button>
						<Button onClick={() => onSave(titleValue)}>Save</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
