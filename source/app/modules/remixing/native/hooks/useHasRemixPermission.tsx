// app/modules/remixing/native/hooks/useHasRemixPermission.tsx
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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/remixing/native/hooks/useHasRemixPermission.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        zuuluu = 3;
        golfie = oscard[zuuluu];
        tangon = undefined;
        offset = report.bind(tangon)(golfie);
        verify = offset.useStateFromStores;
        golfie = _closure1_slot2;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.getChannel;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie = verify.bind(offset)(option, golfie);
        var _closure2_slot1 = golfie;
        zuuluu = oscard[zuuluu];
        tangon = report.bind(tangon)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot1;
                report = null;
                tangon = report == entity;
                entity = undefined;
                if(tangon) { _fun00002_ip = 32; continue _fun00001 }
 18:
                oscard = _closure2_slot1;
                tangon = oscard.isDM;
                entity = tangon.bind(oscard)();
 32:
                if(entity) { _fun00002_ip = 65; continue _fun00001 }
 35:
                tangon = _closure2_slot1;
                tangon = report == tangon;
                michal = undefined;
                if(tangon) { _fun00002_ip = 62; continue _fun00001 }
 48:
                report = _closure2_slot1;
                tangon = report.isMultiUserDM;
                michal = tangon.bind(report)();
 62:
                entity = michal;
 65:
                if(entity) { _fun00002_ip = 137; continue _fun00001 }
 68:
                golfie = _closure1_slot3;
                oscard = golfie.can;
                michal = _closure1_slot4;
                report = michal.SEND_MESSAGES;
                michal = _closure2_slot1;
                michal = oscard.bind(golfie)(report, michal);
                if(!michal) { _fun00002_ip = 134; continue _fun00001 }
 104:
                oscard = _closure1_slot3;
                report = oscard.can;
                tangon = _closure1_slot4;
                tangon = tangon.ATTACH_FILES;
                zuuluu = _closure2_slot1;
                michal = report.bind(oscard)(tangon, zuuluu);
 134:
                entity = michal;
 137:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();