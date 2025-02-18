// app/modules/voice_panel/native/controller/usePanelOpenState.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoicePanelModes;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ComponentActions;
    var _closure1_slot7 = golfie;
    tangon = tangon.Routes;
    var _closure1_slot8 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/controller/usePanelOpenState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: usePanelOpenState
        golfie = argFoo;
        verify = argBar;
        option = argBaz;
        zuuluu = argCor;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = verify;
        var _closure2_slot2 = option;
        var _closure2_slot3 = zuuluu;
        report = _closure1_slot4;
        oscard = report.useEffect;
        tangon = new Array(4);
        tangon[0] = golfie;
        tangon[1] = verify;
        tangon[2] = option;
        tangon[3] = zuuluu;
        zuuluu = function() {
            yankee = function(argFoo) { // Original name: componentActionOpen
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = argFoo;
                    michal = michal.channelId;
                    michal = zuuluu === michal;
                    if(!michal) { _fun00002_ip = 52; continue _fun00001 }
 22:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.PANEL;
                    michal = tangon !== zuuluu;
 52:
                    if(!michal) { _fun00002_ip = 79; continue _fun00001 }
 55:
                    zuuluu = _closure2_slot2;
                    entity = _closure1_slot6;
                    michal = entity.PANEL;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot0 = yankee;
            report = function() { // Original name: componentActionClose
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    entity = zuuluu.get;
                    zuuluu = entity.bind(zuuluu)();
                    if(zuuluu) { _fun00004_ip = 53; continue _fun00003 }
 22:
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getState;
                    report = zuuluu.bind(tangon)();
                    tangon = report.closeChannel;
                    zuuluu = _closure2_slot0;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00004_ip = 101; continue _fun00003;
 53:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.PIP;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 101; continue _fun00003 }
 80:
                    zuuluu = _closure2_slot2;
                    entity = _closure1_slot6;
                    michal = entity.PIP;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 101:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot1 = report;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 5;
            option = golfie[zuuluu];
            tangon = undefined;
            option = oscard.bind(tangon)(option);
            offset = option.ComponentDispatch;
            verify = offset.subscribe;
            michal = _closure1_slot7;
            option = michal.VOICE_PANEL_OPEN;
            option = verify.bind(offset)(option, yankee);
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            tangon = zuuluu.ComponentDispatch;
            zuuluu = tangon.subscribe;
            michal = michal.VOICE_PANEL_CLOSE;
            michal = zuuluu.bind(tangon)(michal, report);
            entity = function() {
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 5;
                zuuluu = oscard[tangon];
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu);
                offset = zuuluu.ComponentDispatch;
                verify = offset.unsubscribe;
                zuuluu = _closure1_slot7;
                option = zuuluu.VOICE_PANEL_OPEN;
                golfie = _closure3_slot0;
                golfie = verify.bind(offset)(option, golfie);
                tangon = oscard[tangon];
                tangon = report.bind(entity)(tangon);
                report = tangon.ComponentDispatch;
                tangon = report.unsubscribe;
                zuuluu = zuuluu.VOICE_PANEL_CLOSE;
                michal = _closure3_slot1;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            return entity;
        };
        zuuluu = oscard.bind(report)(zuuluu, tangon);
        tangon = report.useState;
        zuuluu = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.getHistory;
            entity = entity.bind(michal)();
            entity = entity.location;
            entity = entity.pathname;
            return entity;
        };
        oscard = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot3;
        entity = undefined;
        zuuluu = 2;
        tangon = tangon.bind(entity)(oscard, zuuluu);
        zuuluu = 0;
        oscard = tangon[zuuluu];
        var _closure2_slot4 = oscard;
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot5 = zuuluu;
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.addRouteChangeListener;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    golfie = argFoo;
                    michal = _closure2_slot4;
                    entity = golfie.pathname;
                    if(!(michal !== entity)) { _fun00006_ip = 241; continue _fun00005 }
 23:
                    zuuluu = _closure2_slot5;
                    entity = _closure2_slot4;
                    michal = undefined;
                    entity = zuuluu.bind(michal)(entity);
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    offset = oscard.bind(michal)(zuuluu);
                    verify = offset.matchPath;
                    report = golfie.pathname;
                    zuuluu = {};
                    backup = _closure1_slot8;
                    foxtra = backup.CHANNEL;
                    yankee = 8;
                    romeon = option[yankee];
                    romeon = oscard.bind(michal)(romeon);
                    kiloes = romeon.RouteParam;
                    romeon = kiloes.guildId;
                    romeon = romeon.bind(kiloes)();
                    yankee = option[yankee];
                    yankee = oscard.bind(michal)(yankee);
                    kiloes = yankee.RouteParam;
                    yankee = kiloes.channelId;
                    yankee = yankee.bind(kiloes)();
                    yankee = foxtra.bind(backup)(romeon, yankee);
                    zuuluu['path'] = yankee;
                    report = verify.bind(offset)(report, zuuluu);
                    zuuluu = 9;
                    zuuluu = option[zuuluu];
                    oscard = oscard.bind(michal)(zuuluu);
                    zuuluu = oscard.extractParamsFromVoiceModalRoute;
                    zuuluu = zuuluu.bind(oscard)(golfie);
                    oscard = zuuluu.voiceChannelId;
                    zuuluu = null;
                    if(!(zuuluu == oscard)) { _fun00006_ip = 241; continue _fun00005 }
 188:
                    zuuluu = zuuluu != report;
                    if(!zuuluu) { _fun00006_ip = 214; continue _fun00005 }
 195:
                    report = report.params;
                    report = report.channelId;
                    tangon = _closure2_slot0;
                    zuuluu = report === tangon;
 214:
                    if(zuuluu) { _fun00006_ip = 241; continue _fun00005 }
 217:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 10;
                    entity = tangon[entity];
                    entity = zuuluu.bind(michal)(entity);
                    entity = entity.bind(michal)();
 241:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.removeRouteChangeListener;
                michal = _closure3_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();