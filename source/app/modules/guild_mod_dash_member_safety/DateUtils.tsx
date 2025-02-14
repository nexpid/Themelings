// app/modules/guild_mod_dash_member_safety/DateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    tango = function(argFoo) { // Original name: getMembersTableTimestampFormatter
        _fun59273: for(var _fun59273_ip = 0; ; ) switch(_fun59273_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot3;
            entity = entity.JOINED_AT;
            if(!(tango !== entity)) { _fun59273_ip = 42; continue _fun59273 }
 20:
            entity = _closure1_slot3;
            zulu = entity.ACCOUNT_AGE;
            entity = undefined;
            if(!(tango === zulu)) { _fun59273_ip = 40; continue _fun59273 }
 36:
            entity = _closure1_slot5;
 40:
            _fun59273_ip = 46; continue _fun59273;
 42:
            entity = _closure1_slot4;
 46:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    report = {};
    options = 0;
    report['JOINED_AT'] = options;
    entity = 'JOINED_AT';
    report[options] = entity;
    options = 1;
    report['ACCOUNT_AGE'] = options;
    entity = 'ACCOUNT_AGE';
    report[options] = entity;
    var _closure1_slot3 = report;
    entity = function() { // Original name: getJoinedAtDateFormatter
        entity = {};
        tango = _closure1_slot0;
        report = _closure1_slot2;
        mike = 0;
        oscar = report[mike];
        zulu = undefined;
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.FsBhl5;
        entity['seconds'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.4d1mgY;
        entity['minutes'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.2wkczM;
        entity['hours'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.ocdS+f;
        entity['days'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.az14+v;
        entity['months'] = oscar;
        mike = report[mike];
        mike = tango.bind(zulu)(mike);
        mike = mike.t;
        mike = mike.5Gk1np;
        entity['years'] = mike;
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: getAccountAgeDateFormatter
        entity = {};
        tango = _closure1_slot0;
        report = _closure1_slot2;
        mike = 0;
        oscar = report[mike];
        zulu = undefined;
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.JZP2Rk;
        entity['hours'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.3moSHR;
        entity['days'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.0Ddwr6;
        entity['months'] = oscar;
        mike = report[mike];
        mike = tango.bind(zulu)(mike);
        mike = mike.t;
        mike = mike.cR7lcn;
        entity['years'] = mike;
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = 2;
    oscar = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_mod_dash_member_safety/DateUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = {'month': 'short', 'day': 'numeric', 'year': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
    zulu['ACCOUNT_AGE_DATE_TOOLTIP_CONFIG'] = oscar;
    oscar = {'month': 'short', 'day': 'numeric', 'year': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
    zulu['MEMBER_JOIN_DATE_TOOLTIP_CONFIG'] = oscar;
    zulu['MembersTableDateFormats'] = report;
    zulu['getMembersTableTimestampFormatter'] = tango;
    tango = function(argFoo, argBar) {
        zulu = _closure1_slot6;
        report = undefined;
        mike = argBar;
        tango = zulu.bind(report)(mike);
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 1;
        entity = zulu[entity];
        zulu = mike.bind(report)(entity);
        mike = argFoo;
        entity = false;
        entity = zulu.bind(report)(mike, tango, entity);
        return entity;
    };
    zulu['formatDateRelativeTime'] = tango;
    mike = function(argFoo) {
        _fun59277: for(var _fun59277_ip = 0; ; ) switch(_fun59277_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity == tango)) { _fun59277_ip = 39; continue _fun59277 }
 9:
            entity = global;
            entity = entity.Date;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            oscar = mike;
            entity = new oscar[entity](report);
            mike = entity instanceof Object ? entity : mike;
            _fun59277_ip = 70; continue _fun59277;
 39:
            entity = global;
            entity = entity.Date;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            oscar = zulu;
            report = tango;
            entity = new oscar[entity](report, tango);
            mike = entity instanceof Object ? entity : zulu;
 70:
            entity = mike.getTime;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    zulu['getJoinedAtTimestamp'] = mike;
    return entity;
})();