// app/modules/voice_panel/native/hooks/useCanInviteMembers.tsx
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
    tangon = 'modules/voice_panel/native/hooks/useCanInviteMembers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useCanInviteMembers
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot2;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        michal = _closure1_slot3;
        zuuluu[1] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot2;
                zuuluu = tangon.getChannel;
                entity = _closure2_slot0;
                report = zuuluu.bind(tangon)(entity);
                entity = null;
                entity = entity != report;
                if(!entity) { _fun00002_ip = 59; continue _fun00001 }
 33:
                oscard = _closure1_slot3;
                tangon = oscard.can;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.CONNECT;
                entity = tangon.bind(oscard)(zuuluu, report);
 59:
                if(!entity) { _fun00002_ip = 88; continue _fun00001 }
 62:
                tangon = _closure1_slot3;
                zuuluu = tangon.can;
                michal = _closure1_slot4;
                michal = michal.CREATE_INSTANT_INVITE;
                entity = zuuluu.bind(tangon)(michal, report);
 88:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useCanInviteMembers'] = michal;
    return entity;
})();