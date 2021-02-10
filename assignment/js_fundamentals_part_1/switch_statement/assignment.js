const language = 'english';

switch (language) {
    case 'chinese':
    case 'mandarian':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('4th place');
        break;
    default:
        console.log('Rest are good too!');
}