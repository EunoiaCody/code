// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, (key, value) => {
  if (key == 'date')
    return new Date(value);
  return value;
});

alert(meetup.date.getDate());



let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, (key, value) => {
  if (key == 'date')
    return new Date(value);
  return value;
});