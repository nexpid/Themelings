// app/modules/poggermode/trackPoggermodeSettingsUpdated.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: getScreenshakeLocationName
        _fun104802: for(var _fun104802_ip = 0; ; ) switch(_fun104802_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot2;
            zulu = zulu.CHAT_INPUT;
            if(!(zulu !== mike)) { _fun104802_ip = 66; continue _fun104802 }
 20:
            zulu = _closure1_slot2;
            zulu = zulu.MENTION;
            if(!(zulu !== mike)) { _fun104802_ip = 60; continue _fun104802 }
 34:
            entity = _closure1_slot2;
            entity = entity.VOICE_USER;
            if(!(entity !== mike)) { _fun104802_ip = 52; continue _fun104802 }
 48:
            entity = undefined;
            return entity;
 52:
            entity = 'voice_user';
            return entity;
 60:
            entity = 'mention';
            return entity;
 66:
            entity = 'chat_input';
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: getConfettiLocationName
        _fun104803: for(var _fun104803_ip = 0; ; ) switch(_fun104803_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot3;
            zulu = zulu.CHAT_INPUT;
            if(!(zulu !== mike)) { _fun104803_ip = 88; continue _fun104803 }
 20:
            zulu = _closure1_slot3;
            zulu = zulu.MEMBER_USER;
            if(!(zulu !== mike)) { _fun104803_ip = 80; continue _fun104803 }
 34:
            zulu = _closure1_slot3;
            zulu = zulu.REACTION;
            if(!(zulu !== mike)) { _fun104803_ip = 74; continue _fun104803 }
 48:
            entity = _closure1_slot3;
            entity = entity.CALL_TILE;
            if(!(entity !== mike)) { _fun104803_ip = 66; continue _fun104803 }
 62:
            entity = undefined;
            return entity;
 66:
            entity = 'call_tile';
            return entity;
 74:
            entity = 'reaction';
            return entity;
 80:
            entity = 'member_user';
            return entity;
 88:
            entity = 'chat_input';
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: getListOfEnabledLocations
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = global;
        tango = mike.Object;
        zulu = tango.entries;
        mike = argFoo;
        tango = zulu.bind(tango)(mike);
        zulu = tango.filter;
        mike = function(argFoo) {
            _fun104805: for(var _fun104805_ip = 0; ; ) switch(_fun104805_ip) {
 0:
                tango = argFoo;
                mike = tango[Symbol.iterator];
                tango = mike().next;
                entity = tango().value;
                entity = mike;
                oscar = undefined;
                zulu = entity === oscar;
                entity = undefined;
                if(zulu) { _fun104805_ip = 49; continue _fun104805 }
 24:
                report = tango().value;
                tango = mike;
                tango = tango === oscar;
                entity = undefined;
                zulu = tango;
                if(tango) { _fun104805_ip = 49; continue _fun104805 }
 43:
                entity = report;
                zulu = tango;
 49:
                if(zulu) { _fun104805_ip = 55; continue _fun104805 }
 52:
                mike.return();
 55:
                return entity;
            }
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.map;
        entity = function(argFoo) {
            _fun104806: for(var _fun104806_ip = 0; ; ) switch(_fun104806_ip) {
 0:
                mike = argFoo;
                entity = mike[Symbol.iterator];
                mike = entity().next;
                tango = mike().value;
                mike = entity;
                zulu = undefined;
                mike = mike === zulu;
                report = undefined;
                if(mike) { _fun104806_ip = 27; continue _fun104806 }
 24:
                report = tango;
 27:
                if(mike) { _fun104806_ip = 33; continue _fun104806 }
 30:
                entity.return();
 33:
                mike = _closure2_slot0;
                entity = global;
                tango = entity.Number;
                entity = tango.parseInt;
                entity = entity.bind(tango)(report);
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot7 = entity;
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
    tango = report.bind(entity)(tango);
    options = tango.ShakeLocation;
    var _closure1_slot2 = options;
    tango = tango.ConfettiLocation;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    golf = options.throttle;
    tango = function(argFoo) {
        entity = argFoo;
        sizing = entity.enabled;
        kilo = entity.combosEnabled;
        backup = entity.combosRequiredCount;
        romeo = entity.screenshakeEnabled;
        golf = entity.shakeIntensity;
        foxtrot = entity.screenshakeEnabledLocations;
        yankee = entity.confettiEnabled;
        offset = entity.confettiSize;
        verify = entity.confettiCount;
        options = entity.confettiEnabledLocations;
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot4;
        zulu = mike.POGGERMODE_SETTINGS_UPDATED;
        mike = {};
        mike['enabled'] = sizing;
        mike['combos_enabled'] = kilo;
        mike['combos_required_count'] = backup;
        mike['screenshake_enabled'] = romeo;
        mike['shake_intensity'] = golf;
        golf = _closure1_slot7;
        romeo = _closure1_slot5;
        romeo = golf.bind(entity)(foxtrot, romeo);
        mike['screenshake_enabled_locations'] = romeo;
        mike['confetti_enabled'] = yankee;
        mike['confetti_size'] = offset;
        mike['confetti_count'] = verify;
        oscar = _closure1_slot6;
        oscar = golf.bind(entity)(options, oscar);
        mike['confetti_enabled_locations'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike = 5000;
    mike = golf.bind(options)(tango, mike);
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/poggermode/trackPoggermodeSettingsUpdated.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();