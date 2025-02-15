// app/modules/auth/LoginHandoffSource.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    report = tango.Routes;
    var _closure1_slot2 = report;
    tango = tango.UserSettingsSections;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.StaticChannelRoute;
    var _closure1_slot4 = tango;
    tango = {};
    report = 'role_subscription';
    tango['ROLE_SUBSCRIPTION'] = report;
    report = 'role_subscription_setting';
    tango['ROLE_SUBSCRIPTION_SETTING'] = report;
    var _closure1_slot5 = tango;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/auth/LoginHandoffSource.tsx';
    report = oscar.bind(golf)(report);
    zulu['LoginHandoffSource'] = tango;
    mike = function(argFoo) { // Original name: getLoginHandoffSourceFromRedirectTo
        _fun81549: for(var _fun81549_ip = 0; ; ) switch(_fun81549_ip) {
 0:
            entity = global;
            zulu = entity.decodeURIComponent;
            entity = undefined;
            mike = argFoo;
            tango = zulu.bind(entity)(mike);
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 2;
            zulu = oscar[zulu];
            report = report.bind(entity)(zulu);
            zulu = report.tryParseChannelPath;
            zulu = zulu.bind(report)(tango);
            report = null;
            if(!(report != zulu)) { _fun81549_ip = 77; continue _fun81549 }
 58:
            report = zulu.channelId;
            zulu = _closure1_slot4;
            zulu = zulu.ROLE_SUBSCRIPTIONS;
            if(!(report !== zulu)) { _fun81549_ip = 127; continue _fun81549 }
 77:
            golf = _closure1_slot2;
            oscar = golf.SETTINGS;
            zulu = _closure1_slot3;
            report = zulu.SUBSCRIPTIONS;
            zulu = 'role-subscriptions';
            zulu = oscar.bind(golf)(report, zulu);
            entity = undefined;
            if(!(tango === zulu)) { _fun81549_ip = 125; continue _fun81549 }
 115:
            zulu = _closure1_slot5;
            entity = zulu.ROLE_SUBSCRIPTION_SETTING;
 125:
            _fun81549_ip = 137; continue _fun81549;
 127:
            mike = _closure1_slot5;
            entity = mike.ROLE_SUBSCRIPTION;
 137:
            return entity;
        }
    };
    zulu['getLoginHandoffSourceFromRedirectTo'] = mike;
    return entity;
})();