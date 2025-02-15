// app/modules/forums/tracking/ForumSessionAnalyticsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: createSessionData
        entity = {};
        mike = argFoo;
        entity['channelId'] = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        zulu = tango.bind(mike)(zulu);
        mike = zulu.v4;
        mike = mike.bind(zulu)();
        entity['sessionId'] = mike;
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: ForumSessionAnalyticsManager
            tango = _closure1_slot2;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = this;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        report = 'getForumChannelSessionId';
        entity['key'] = report;
        mike = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = argFoo;
                entity = this;
                zulu = entity.session;
                mike = null;
                if(!(mike == zulu)) { _fun00002_ip = 38; continue _fun00001 }
 18:
                zulu = _closure1_slot4;
                mike = undefined;
                mike = zulu.bind(mike)(tango);
                entity['session'] = mike;
 38:
                mike = entity.session;
                mike = mike.channelId;
                if(!(mike !== tango)) { _fun00002_ip = 73; continue _fun00001 }
 53:
                zulu = _closure1_slot4;
                mike = undefined;
                mike = zulu.bind(mike)(tango);
                entity['session'] = mike;
 73:
                entity = entity.session;
                entity = entity.sessionId;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/tracking/ForumSessionAnalyticsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();