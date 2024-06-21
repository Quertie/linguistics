import { ExampleData } from "../types/ExampleData";

export const WordsEndingInRExamples = [
    new ExampleData('The doctor‿and I', 'the_doctor_and_i', '', '', 'ðə \'dɒktə‿ɹ‿ən ɑj', '', ''),
    new ExampleData('The car‿is outside', 'the_car_is_outside', '', '', 'ðə \'kʰɑ:‿ɹ‿ɪz aʊt\'sɑjd', '', ''),
    new ExampleData('The clear‿atmosphere', 'the_clear_atmosphere', '', '', 'ðə klɪə‿ɹ‿atməsfɪə', '', ''),
    new ExampleData('The more‿I know', 'the_more_i_know', '', '', 'ðə mo:‿ɹ‿aj nəʊ', '', ''),
]

export const CounterExamples = [
    new ExampleData('The doctor takes checks', 'the_doctor_takes_checks', '', '', 'ðə \'dɒktə tɛjks \'tʃɛks', '', ''),
    new ExampleData('The car wash', 'the_car_wash', '', '', 'ðə \'kʰɑ: wɒʃ', '', ''),
    new ExampleData('Clear your settings', 'clear_your_settings', '', '', '\'klɪə jo: \'sɛtɪŋs', '', ''),
    new ExampleData('More library features!', 'more_library_features', '', '', '\'mo: \'lɑjbrərɪj: \'fɪj:tʃəz', '', ''),
]

export const WordsNonEndingInRExamples = [
    new ExampleData('Barbara‿r‿is nice', 'barbara_is_nice', '', '', '\'bɑ:bɹə‿ɹ‿ɪs‿\'nɑjs', '', ''),
    new ExampleData('Papa‿r‿is in the kitchen', 'papa_is_in_the_kitchen', '', '', 'pə\'pɑ:‿ɹ‿ɪz ɪn ðə \'kʰɪtʃɪn', '', ''),
    new ExampleData('Arkensas‿is‿in the USA', 'arkensas_is_in_the_usa', '', '', '\'ɑ:kənso:‿ɹ‿ɪz ɪn ðə \'ju:ɛs\'ɛj', '', ''),
]

export const UnpronouncedRExamples = [
    new ExampleData('Far', 'far', '', '', 'fɑ:', '', ''),
    new ExampleData('For', 'for', '', '', 'fo:', '', ''),
    new ExampleData('Professor', 'professor', '', '', 'pɹə\'fɛsə', '', ''),
    new ExampleData('Your', 'your', '', '', 'jo:', '', ''),
    new ExampleData('Saw', 'saw', '', '', 'so:', '', ''),
    new ExampleData('Sore', 'saw', '', '', 'so:', '', ''),
]

export const LinkingRExamples = [
    new ExampleData('Far‿East', 'far_east', '', '', 'fɑ:‿ɹ‿ɪj:st', '', ''),
    new ExampleData('For‿example', 'for_example_long', '', '', 'fo:‿ɹ‿ɪ\'gzɑmpļ', '', ''),
    new ExampleData('Professor‿of psychology', 'professor_of_psychology', '', '', 'pɹə\'fɛsə‿ɹ‿əv sɑj\'kʰɒlədʒɪj', '', ''),
    new ExampleData('Your‿eyes', 'your_eyes', '', '', 'jo:‿ɹ‿\'ɑjz', '', ''),
    new ExampleData('I saw‿r‿it', 'i_saw_it', '', '', 'aj \'so:‿ɹ‿ɪt', '', ''),
    new ExampleData('Sore‿eyes', 'sore_eyes', '', '', 'so:‿ɹ‿\'ɑjz', '', ''),
]