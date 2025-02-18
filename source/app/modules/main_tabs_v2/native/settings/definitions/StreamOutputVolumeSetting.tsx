// app/modules/main_tabs_v2/native/settings/definitions/StreamOutputVolumeSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: getActiveApplicationStream
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[0];
            golfie = undefined;
            if(!(michal === golfie)) { _fun00002_ip = 35; continue _fun00001 }
 9:
            tangon = _closure1_slot3;
            entity = new Array(2);
            entity[0] = tangon;
            zuuluu = _closure1_slot4;
            entity[1] = zuuluu;
            michal = entity;
 35:
            tangon = michal;
            entity = tangon[Symbol.iterator];
            tangon = entity().next;
            report = tangon().value;
            michal = entity;
            zuuluu = michal === golfie;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 60; continue _fun00001 }
 57:
            michal = report;
 60:
            oscard = undefined;
            if(zuuluu) { _fun00002_ip = 90; continue _fun00001 }
 65:
            report = tangon().value;
            tangon = entity;
            tangon = tangon === golfie;
            oscard = undefined;
            zuuluu = tangon;
            if(tangon) { _fun00002_ip = 90; continue _fun00001 }
 84:
            oscard = report;
            zuuluu = tangon;
 90:
            if(zuuluu) { _fun00002_ip = 96; continue _fun00001 }
 93:
            entity.return();
 96:
            entity = michal.getLastActiveStream;
            michal = entity.bind(michal)();
            report = null;
            zuuluu = report != michal;
            entity = null;
            if(!zuuluu) { _fun00002_ip = 142; continue _fun00001 }
 117:
            tangon = michal.ownerId;
            zuuluu = oscard.getId;
            zuuluu = zuuluu.bind(oscard)();
            entity = null;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 142; continue _fun00001 }
 139:
            entity = michal;
 142:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = {};
    option = 4;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.RendererType;
    option = option.VOLUME_SLIDER;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 9;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.pEAl4e;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.VOICE;
    michal['parent'] = golfie;
    golfie = 200;
    michal['maximum'] = golfie;
    golfie = function() { // Original name: useStreamVolumeSettingValue
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(3);
        michal[0] = report;
        report = _closure1_slot4;
        michal[1] = report;
        entity = _closure1_slot5;
        michal[2] = entity;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot6;
                tangon = _closure1_slot3;
                entity = new Array(2);
                entity[0] = tangon;
                tangon = _closure1_slot4;
                entity[1] = tangon;
                golfie = undefined;
                zuuluu = zuuluu.bind(golfie)(entity);
                entity = null;
                tangon = entity != zuuluu;
                entity = 0;
                if(!tangon) { _fun00004_ip = 99; continue _fun00003 }
 45:
                report = _closure1_slot5;
                tangon = report.getLocalVolume;
                zuuluu = zuuluu.ownerId;
                oscard = _closure1_slot0;
                option = _closure1_slot2;
                michal = 6;
                michal = option[michal];
                michal = oscard.bind(golfie)(michal);
                michal = michal.MediaEngineContextTypes;
                michal = michal.STREAM;
                entity = tangon.bind(report)(zuuluu, michal);
 99:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useValue'] = golfie;
    golfie = function(argFoo) { // Original name: onStreamValueSettingValueChange
        zuuluu = _closure1_slot6;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)();
        report = _closure1_slot1;
        golfie = _closure1_slot2;
        tangon = 7;
        tangon = golfie[tangon];
        option = report.bind(entity)(tangon);
        tangon = null;
        oscard = tangon != zuuluu;
        tangon = 'Can not set stream volume without active stream';
        tangon = option.bind(entity)(oscard, tangon);
        tangon = 8;
        tangon = golfie[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.setLocalVolume;
        tangon = zuuluu.ownerId;
        zuuluu = _closure1_slot0;
        michal = 6;
        michal = golfie[michal];
        michal = zuuluu.bind(entity)(michal);
        michal = michal.MediaEngineContextTypes;
        zuuluu = michal.STREAM;
        michal = argFoo;
        michal = report.bind(oscard)(tangon, michal, zuuluu);
        return entity;
    };
    michal['onValueChange'] = golfie;
    golfie = function() { // Original name: useHasStreamVolumeSetting
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(2);
        michal[0] = report;
        entity = _closure1_slot4;
        michal[1] = entity;
        entity = function() {
            zuuluu = _closure1_slot6;
            tangon = _closure1_slot3;
            michal = new Array(2);
            michal[0] = tangon;
            entity = _closure1_slot4;
            michal[1] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['usePredicate'] = golfie;
    tangon = function() { // Original name: additionalSearchTerms
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 9;
        entity = golfie[michal];
        report = undefined;
        entity = oscard.bind(report)(entity);
        tangon = entity.intl;
        zuuluu = tangon.string;
        entity = golfie[michal];
        entity = oscard.bind(report)(entity);
        entity = entity.t;
        entity = entity.3182VF;
        zuuluu = zuuluu.bind(tangon)(entity);
        entity = new Array(2);
        entity[0] = zuuluu;
        zuuluu = golfie[michal];
        zuuluu = oscard.bind(report)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.string;
        michal = golfie[michal];
        michal = oscard.bind(report)(michal);
        michal = michal.t;
        michal = michal.DGq/PT;
        michal = zuuluu.bind(tangon)(michal);
        entity[1] = michal;
        return entity;
    };
    michal['additionalSearchTerms'] = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/StreamOutputVolumeSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();