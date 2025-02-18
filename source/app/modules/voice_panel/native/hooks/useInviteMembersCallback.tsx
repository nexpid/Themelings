// app/modules/voice_panel/native/hooks/useInviteMembersCallback.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticsPages;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/hooks/useInviteMembersCallback.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useInviteMembersCallback
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useCallback;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot3;
                michal = tangon.getChannel;
                entity = _closure2_slot0;
                tangon = michal.bind(tangon)(entity);
                entity = null;
                michal = entity != tangon;
                if(!michal) { _fun00002_ip = 132; continue _fun00001 }
 33:
                michal = tangon.isPrivate;
                michal = michal.bind(tangon)();
                golfie = _closure1_slot0;
                oscard = _closure1_slot1;
                if(michal) { _fun00002_ip = 88; continue _fun00001 }
 54:
                michal = 4;
                report = oscard[michal];
                michal = undefined;
                option = golfie.bind(michal)(report);
                report = option.showInstantInviteActionSheet;
                michal = 'Voice Channel';
                michal = report.bind(option)(tangon, michal);
                _fun00002_ip = 129; continue _fun00001;
 88:
                report = 3;
                oscard = oscard[report];
                report = undefined;
                oscard = golfie.bind(report)(oscard);
                report = oscard.navigateToNewGroupDM;
                tangon = tangon.id;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.CHANNEL_CALL;
                michal = report.bind(oscard)(tangon, zuuluu);
 129:
                entity = michal;
 132:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useInviteMembersCallback'] = michal;
    return entity;
})();