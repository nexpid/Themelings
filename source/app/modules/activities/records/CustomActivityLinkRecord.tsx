// app/modules/activities/records/CustomActivityLinkRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo) { // Original name: CustomActivityLinkRecord
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                zuuluu = this;
                oscard = _closure1_slot2;
                report = _closure2_slot0;
                entity = undefined;
                report = oscard.bind(entity)(zuuluu, report);
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                tangon = 2;
                tangon = oscard[tangon];
                oscard = report.bind(entity)(tangon);
                report = oscard.decodeCustomActivityLink;
                tangon = michal.link_id;
                oscard = report.bind(oscard)(tangon);
                tangon = null;
                golfie = tangon == oscard;
                report = undefined;
                if(golfie) { _fun00002_ip = 81; continue _fun00001 }
 76:
                report = oscard.type;
 81:
                oscard = tangon != report;
                tangon = null;
                if(!oscard) { _fun00002_ip = 93; continue _fun00001 }
 90:
                tangon = report;
 93:
                zuuluu['type'] = tangon;
                tangon = michal.application_id;
                zuuluu['applicationId'] = tangon;
                tangon = michal.link_id;
                zuuluu['linkId'] = tangon;
                tangon = 'asset_id';
                report = tangon in michal;
                tangon = undefined;
                if(!report) { _fun00002_ip = 142; continue _fun00001 }
 136:
                tangon = michal.asset_id;
 142:
                zuuluu['assetId'] = tangon;
                tangon = 'asset_path';
                report = tangon in michal;
                tangon = undefined;
                if(!report) { _fun00002_ip = 171; continue _fun00001 }
 163:
                tangon = michal.asset_path;
 171:
                zuuluu['assetPath'] = tangon;
                tangon = michal.title;
                zuuluu['title'] = tangon;
                tangon = michal.description;
                zuuluu['description'] = tangon;
                michal = michal.custom_id;
                zuuluu['customId'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'getAssetURL';
        entity['key'] = report;
        michal = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                tangon = michal.type;
                oscard = _closure1_slot0;
                entity = _closure1_slot1;
                golfie = 2;
                entity = entity[golfie];
                report = undefined;
                entity = oscard.bind(report)(entity);
                entity = entity.CustomLinkType;
                entity = entity.MANAGED;
                if(!(tangon !== entity)) { _fun00004_ip = 128; continue _fun00003 }
 49:
                oscard = michal.type;
                tangon = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[golfie];
                entity = tangon.bind(report)(entity);
                entity = entity.CustomLinkType;
                tangon = entity.QUICK;
                entity = undefined;
                if(!(oscard === tangon)) { _fun00004_ip = 126; continue _fun00003 }
 89:
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                tangon = 4;
                tangon = golfie[tangon];
                golfie = oscard.bind(report)(tangon);
                oscard = golfie.getQuickLinkImage;
                tangon = michal.assetPath;
                entity = oscard.bind(golfie)(tangon);
 126:
                _fun00004_ip = 178; continue _fun00003;
 128:
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                zuuluu = 3;
                zuuluu = oscard[zuuluu];
                oscard = tangon.bind(report)(zuuluu);
                report = oscard.getAssetImage;
                tangon = michal.applicationId;
                zuuluu = michal.assetId;
                michal = 512;
                entity = report.bind(oscard)(tangon, zuuluu, michal);
 178:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/records/CustomActivityLinkRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();