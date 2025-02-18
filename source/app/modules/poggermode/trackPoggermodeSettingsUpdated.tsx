// app/modules/poggermode/trackPoggermodeSettingsUpdated.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: getScreenshakeLocationName
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.CHAT_INPUT;
            if(!(zuuluu !== michal)) { _fun00002_ip = 66; continue _fun00001 }
 20:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.MENTION;
            if(!(zuuluu !== michal)) { _fun00002_ip = 60; continue _fun00001 }
 34:
            entity = _closure1_slot2;
            entity = entity.VOICE_USER;
            if(!(entity !== michal)) { _fun00002_ip = 52; continue _fun00001 }
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.CHAT_INPUT;
            if(!(zuuluu !== michal)) { _fun00004_ip = 88; continue _fun00003 }
 20:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.MEMBER_USER;
            if(!(zuuluu !== michal)) { _fun00004_ip = 80; continue _fun00003 }
 34:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.REACTION;
            if(!(zuuluu !== michal)) { _fun00004_ip = 74; continue _fun00003 }
 48:
            entity = _closure1_slot3;
            entity = entity.CALL_TILE;
            if(!(entity !== michal)) { _fun00004_ip = 66; continue _fun00003 }
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
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = global;
        tangon = michal.Object;
        zuuluu = tangon.entries;
        michal = argFoo;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.filter;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                michal = tangon[Symbol.iterator];
                tangon = michal().next;
                entity = tangon().value;
                entity = michal;
                oscard = undefined;
                zuuluu = entity === oscard;
                entity = undefined;
                if(zuuluu) { _fun00006_ip = 49; continue _fun00005 }
 24:
                report = tangon().value;
                tangon = michal;
                tangon = tangon === oscard;
                entity = undefined;
                zuuluu = tangon;
                if(tangon) { _fun00006_ip = 49; continue _fun00005 }
 43:
                entity = report;
                zuuluu = tangon;
 49:
                if(zuuluu) { _fun00006_ip = 55; continue _fun00005 }
 52:
                michal.return();
 55:
                return entity;
            }
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = argFoo;
                entity = michal[Symbol.iterator];
                michal = entity().next;
                tangon = michal().value;
                michal = entity;
                zuuluu = undefined;
                michal = michal === zuuluu;
                report = undefined;
                if(michal) { _fun00008_ip = 27; continue _fun00007 }
 24:
                report = tangon;
 27:
                if(michal) { _fun00008_ip = 33; continue _fun00007 }
 30:
                entity.return();
 33:
                michal = _closure2_slot0;
                entity = global;
                tangon = entity.Number;
                entity = tangon.parseInt;
                entity = entity.bind(tangon)(report);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    option = tangon.ShakeLocation;
    var _closure1_slot2 = option;
    tangon = tangon.ConfettiLocation;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    golfie = option.throttle;
    tangon = function(argFoo) {
        entity = argFoo;
        sizing = entity.enabled;
        kiloes = entity.combosEnabled;
        backup = entity.combosRequiredCount;
        romeon = entity.screenshakeEnabled;
        golfie = entity.shakeIntensity;
        foxtra = entity.screenshakeEnabledLocations;
        yankee = entity.confettiEnabled;
        offset = entity.confettiSize;
        verify = entity.confettiCount;
        option = entity.confettiEnabledLocations;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot4;
        zuuluu = michal.POGGERMODE_SETTINGS_UPDATED;
        michal = {};
        michal['enabled'] = sizing;
        michal['combos_enabled'] = kiloes;
        michal['combos_required_count'] = backup;
        michal['screenshake_enabled'] = romeon;
        michal['shake_intensity'] = golfie;
        golfie = _closure1_slot7;
        romeon = _closure1_slot5;
        romeon = golfie.bind(entity)(foxtra, romeon);
        michal['screenshake_enabled_locations'] = romeon;
        michal['confetti_enabled'] = yankee;
        michal['confetti_size'] = offset;
        michal['confetti_count'] = verify;
        oscard = _closure1_slot6;
        oscard = golfie.bind(entity)(option, oscard);
        michal['confetti_enabled_locations'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal = 5000;
    michal = golfie.bind(option)(tangon, michal);
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/poggermode/trackPoggermodeSettingsUpdated.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();