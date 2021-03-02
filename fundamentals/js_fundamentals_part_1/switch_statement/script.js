const day = 'sunday1';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('D1-Mon');
        break;
    case 'tuesday':
        console.log('D2-Tues');
        break;
    case 'wednesday':
        console.log('D3-Wed');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Weekend!');
        break;
    default:
        console.log('Invalid Day ');
}