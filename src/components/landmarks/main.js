import Perceivable from '../complex/perceivable';
import TextAlternatives from '../complex/textAlternatives';
import NonTextContent from '../complex/nonTextContent';
import TimeBasedMedia from '../complex/timeBasedMedia';
import Adaptable from '../complex/adaptable';
import Relationships from '../complex/relationships';
import Sequence from '../complex/sequence';
import SensoryCharacteristics from '../complex/sensoryCharacteristics';
import Distinguishable from '../complex/distinguishable';
import Operable from '../complex/operable';
import Keyboard from '../complex/keyboard';
import EnoughTime from '../complex/enoughTime';
import AutomaticUpdates from '../complex/automaticUpdates';
import Seizures from '../complex/seizures';
import Navigable from '../complex/navigable';
import Title from '../complex/title';
import FocusOrder from '../complex/focusOrder';
import LinkContext from '../complex/linkContext';
import HeadingsAndLabels from '../complex/headingsAndLabels';
import FocusVisible from '../complex/focusVisible';
import SectionHeadings from '../complex/sectionHeadings';
import InputModalities from '../complex/inputModalities';

const Main = () => {
	return (
	<>
		<main>
		<Perceivable />
		<TextAlternatives />
		<NonTextContent />
		<TimeBasedMedia />
		<Adaptable />
		<Relationships />
		<Sequence />
		<SensoryCharacteristics />
		<Distinguishable />
		<Operable />
		<Keyboard />
		<EnoughTime />
		<AutomaticUpdates />
		<Seizures />
		<Navigable />
		<Title />
		<FocusOrder />
		<LinkContext />
		<HeadingsAndLabels />
		<FocusVisible />
		<SectionHeadings />
		<InputModalities />
		</main>
		</>
	);
}

export default Main;
