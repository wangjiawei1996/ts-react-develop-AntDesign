enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
}
function getResulr(status) {
  if (status === Status.OFFLINE) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted';
  }
  return 'error';
}

const result = getResulr(Status.DELETED);
console.log(result);
