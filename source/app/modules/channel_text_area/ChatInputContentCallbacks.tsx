// app/modules/channel_text_area/ChatInputContentCallbacks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: areMemberGroupsHydrated
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = tangon.length;
            zuuluu = 1;
            entity = entity > zuuluu;
            if(entity) { _fun00002_ip = 74; continue _fun00001 }
 18:
            michal = tangon.length;
            michal = zuuluu === michal;
            if(!michal) { _fun00002_ip = 49; continue _fun00001 }
 30:
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            report = zuuluu.type;
            zuuluu = 'GROUP';
            michal = zuuluu === report;
 49:
            if(!michal) { _fun00002_ip = 71; continue _fun00001 }
 52:
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            tangon = zuuluu.id;
            zuuluu = 'unknown';
            michal = zuuluu === tangon;
 71:
            entity = !michal;
 74:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: tryUpdateSubscriptionForHereMention
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            option = argBaz;
            golfie = argCor;
            michal = _closure1_slot7;
            zuuluu = _closure1_slot5;
            entity = zuuluu.getProps;
            entity = entity.bind(zuuluu)(option, golfie);
            entity = entity.groups;
            offset = undefined;
            michal = michal.bind(offset)(entity);
            entity = !michal;
            entity = !entity;
            if(michal) { _fun00004_ip = 173; continue _fun00003 }
 54:
            zuuluu = oscard.length;
            michal = 5;
            zuuluu = zuuluu < michal;
            if(zuuluu) { _fun00004_ip = 81; continue _fun00003 }
 69:
            report = oscard.length;
            michal = argBar;
            zuuluu = report > michal;
 81:
            michal = !zuuluu;
            if(zuuluu) { _fun00004_ip = 170; continue _fun00003 }
 87:
            report = oscard.indexOf;
            zuuluu = _closure1_slot6;
            report = report.bind(oscard)(zuuluu);
            zuuluu = -1;
            zuuluu = zuuluu !== report;
            if(!zuuluu) { _fun00004_ip = 167; continue _fun00003 }
 114:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 3;
            tangon = yankee[tangon];
            oscard = verify.bind(offset)(tangon);
            report = oscard.subscribeChannel;
            tangon = 4;
            tangon = yankee[tangon];
            tangon = verify.bind(offset)(tangon);
            tangon = tangon.DEFAULT_RANGES;
            tangon = report.bind(oscard)(option, golfie, tangon);
            zuuluu = true;
 167:
            michal = zuuluu;
 170:
            entity = michal;
 173:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golfie[report];
    report = argCor;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = '@here';
    var _closure1_slot6 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/channel_text_area/ChatInputContentCallbacks.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['tryUpdateSubscriptionForHereMention'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: useHereMentionCallback
        option = argFoo;
        golfie = argBar;
        oscard = argBaz;
        var _closure2_slot0 = option;
        var _closure2_slot1 = golfie;
        var _closure2_slot2 = oscard;
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = report.bind(entity)(zuuluu);
        zuuluu = zuuluu.bind(entity)();
        var _closure2_slot3 = zuuluu;
        report = _closure1_slot4;
        offset = report.useState;
        verify = false;
        offset = offset.bind(report)(verify);
        verify = _closure1_slot3;
        tangon = 2;
        verify = verify.bind(entity)(offset, tangon);
        tangon = 0;
        offset = verify[tangon];
        var _closure2_slot4 = offset;
        tangon = 1;
        tangon = verify[tangon];
        var _closure2_slot5 = tangon;
        verify = report.useMemo;
        tangon = new Array(3);
        tangon[0] = zuuluu;
        tangon[1] = golfie;
        tangon[2] = oscard;
        zuuluu = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.debounce;
            zuuluu = {};
            entity = 500;
            zuuluu['maxWait'] = entity;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    golfie = _closure1_slot8;
                    offset = _closure2_slot3;
                    verify = _closure2_slot1;
                    option = _closure2_slot2;
                    entity = undefined;
                    yankee = argFoo;
                    romeon = undefined;
                    zuuluu = romeon[golfie](yankee, offset, verify, option, golfie);
                    if(!zuuluu) { _fun00006_ip = 47; continue _fun00005 }
 36:
                    zuuluu = _closure2_slot5;
                    michal = true;
                    michal = zuuluu.bind(entity)(michal);
 47:
                    return entity;
                }
            };
            entity = 200;
            entity = tangon.bind(report)(michal, entity, zuuluu);
            return entity;
        };
        verify = verify.bind(report)(zuuluu, tangon);
        var _closure2_slot6 = verify;
        tangon = report.useEffect;
        zuuluu = new Array(5);
        zuuluu[0] = offset;
        zuuluu[1] = verify;
        zuuluu[2] = option;
        zuuluu[3] = golfie;
        zuuluu[4] = oscard;
        michal = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = _closure1_slot5;
                tangon = oscard.getProps;
                report = _closure2_slot1;
                zuuluu = _closure2_slot2;
                zuuluu = tangon.bind(oscard)(report, zuuluu);
                tangon = zuuluu.groups;
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00008_ip = 100; continue _fun00007 }
 42:
                zuuluu = _closure1_slot7;
                michal = undefined;
                michal = zuuluu.bind(michal)(tangon);
                if(michal) { _fun00008_ip = 100; continue _fun00007 }
 56:
                michal = _closure2_slot4;
                if(michal) { _fun00008_ip = 100; continue _fun00007 }
 63:
                tangon = _closure2_slot0;
                zuuluu = tangon.addListener;
                michal = _closure2_slot6;
                entity = 'text-changed';
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = function() {
                    tangon = _closure2_slot0;
                    zuuluu = tangon.removeListener;
                    michal = _closure2_slot6;
                    entity = 'text-changed';
                    entity = zuuluu.bind(tangon)(entity, michal);
                    entity = michal.cancel;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                return entity;
 100:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useHereMentionCallback'] = michal;
    return entity;
})();