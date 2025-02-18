// app/modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RelationshipTypes;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getPendingRelationshipIds
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = arguments[0];
            oscard = undefined;
            if(!(report === oscard)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            report = {};
 13:
            var _closure2_slot0 = report;
            entity = {};
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 2;
            option = golfie[zuuluu];
            verify = tangon.bind(oscard)(option);
            option = verify.keys;
            offset = option.bind(verify)(report);
            verify = offset.filter;
            option = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    entity = _closure2_slot0;
                    michal = entity[report];
                    entity = _closure1_slot3;
                    entity = entity.PENDING_INCOMING;
                    entity = michal === entity;
                    if(!entity) { _fun00004_ip = 70; continue _fun00003 }
 34:
                    tangon = _closure1_slot2;
                    michal = tangon.isSpam;
                    michal = michal.bind(tangon)(report);
                    if(michal) { _fun00004_ip = 67; continue _fun00003 }
 52:
                    tangon = _closure1_slot2;
                    zuuluu = tangon.isIgnored;
                    michal = zuuluu.bind(tangon)(report);
 67:
                    entity = !michal;
 70:
                    return entity;
                }
            };
            verify = verify.bind(offset)(option);
            option = verify.reverse;
            option = option.bind(verify)();
            entity['pendingIncomingIds'] = option;
            option = golfie[zuuluu];
            verify = tangon.bind(oscard)(option);
            option = verify.keys;
            offset = option.bind(verify)(report);
            verify = offset.filter;
            option = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                michal = michal[entity];
                entity = _closure1_slot3;
                entity = entity.PENDING_OUTGOING;
                entity = michal === entity;
                return entity;
            };
            verify = verify.bind(offset)(option);
            option = verify.reverse;
            option = option.bind(verify)();
            entity['pendingOutgoingIds'] = option;
            option = golfie[zuuluu];
            verify = tangon.bind(oscard)(option);
            option = verify.keys;
            offset = option.bind(verify)(report);
            verify = offset.filter;
            option = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    entity = _closure2_slot0;
                    zuuluu = entity[tangon];
                    entity = _closure1_slot3;
                    entity = entity.PENDING_INCOMING;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00006_ip = 49; continue _fun00005 }
 34:
                    zuuluu = _closure1_slot2;
                    michal = zuuluu.isSpam;
                    entity = michal.bind(zuuluu)(tangon);
 49:
                    return entity;
                }
            };
            verify = verify.bind(offset)(option);
            option = verify.reverse;
            option = option.bind(verify)();
            entity['spamIds'] = option;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.keys;
            tangon = zuuluu.bind(tangon)(report);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    entity = _closure2_slot0;
                    zuuluu = entity[tangon];
                    entity = _closure1_slot3;
                    entity = entity.PENDING_INCOMING;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00008_ip = 49; continue _fun00007 }
 34:
                    zuuluu = _closure1_slot2;
                    michal = zuuluu.isIgnored;
                    entity = michal.bind(zuuluu)(tangon);
 49:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            entity['ignoredUserIds'] = michal;
            return entity;
        }
    };
    zuuluu['getPendingRelationshipIds'] = tangon;
    tangon = function(argFoo) { // Original name: getPendingGameRelationshipUserIds
        tangon = argFoo;
        entity = new Array(0);
        var _closure2_slot0 = entity;
        zuuluu = global;
        zuuluu = zuuluu.Set;
        report = zuuluu.prototype;
        report = Object.create(report, {constructor: {value: zuuluu}});
        golfie = report;
        zuuluu = new golfie[zuuluu](oscard);
        zuuluu = zuuluu instanceof Object ? zuuluu : report;
        var _closure2_slot1 = zuuluu;
        zuuluu = tangon.values;
        tangon = zuuluu.bind(tangon)();
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.id;
                michal = entity.type;
                entity = _closure1_slot3;
                entity = entity.PENDING_INCOMING;
                entity = michal !== entity;
                if(entity) { _fun00010_ip = 50; continue _fun00009 }
 33:
                tangon = _closure2_slot1;
                michal = tangon.has;
                entity = michal.bind(tangon)(zuuluu);
 50:
                if(entity) { _fun00010_ip = 84; continue _fun00009 }
 53:
                tangon = _closure2_slot1;
                michal = tangon.add;
                michal = michal.bind(tangon)(zuuluu);
                michal = _closure2_slot0;
                entity = michal.push;
                entity = entity.bind(michal)(zuuluu);
 84:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['getPendingGameRelationshipUserIds'] = tangon;
    michal = function(argFoo) { // Original name: getPendingGameRelationships
        report = argFoo;
        zuuluu = new Array(0);
        var _closure2_slot0 = zuuluu;
        michal = new Array(0);
        var _closure2_slot1 = michal;
        tangon = report.values;
        report = tangon.bind(report)();
        tangon = report.forEach;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                tangon = zuuluu.type;
                michal = _closure1_slot3;
                michal = michal.PENDING_INCOMING;
                if(!(tangon !== michal)) { _fun00012_ip = 63; continue _fun00011 }
 25:
                michal = zuuluu.type;
                entity = _closure1_slot3;
                entity = entity.PENDING_OUTGOING;
                if(!(michal === entity)) { _fun00012_ip = 80; continue _fun00011 }
 44:
                michal = _closure2_slot1;
                entity = michal.push;
                entity = entity.bind(michal)(zuuluu);
                _fun00012_ip = 80; continue _fun00011;
 63:
                michal = _closure2_slot0;
                entity = michal.push;
                entity = entity.bind(michal)(zuuluu);
 80:
                entity = undefined;
                return entity;
            }
        };
        entity = tangon.bind(report)(entity);
        entity = {};
        entity['pendingIncomingGameRelationships'] = zuuluu;
        entity['pendingOutgoingGameRelationships'] = michal;
        return entity;
    };
    zuuluu['getPendingGameRelationships'] = michal;
    return entity;
})();