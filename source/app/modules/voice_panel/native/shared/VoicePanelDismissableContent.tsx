// app/modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoicePanelModes;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isActivityParticipant;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = function() { // Original name: VoiceControlsNuxActionSheetImporter
        zuuluu = _closure1_slot0;
        entity = _closure1_slot2;
        michal = 7;
        michal = entity[michal];
        tangon = undefined;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = 6;
        michal = entity[michal];
        entity = entity.paths;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot9 = tangon;
    tangon = {};
    option = 'function VoicePanelDismissableContentTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}';
    tangon['code'] = option;
    var _closure1_slot10 = tangon;
    tangon = {};
    option = 'function VoicePanelDismissableContentTsx2(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}';
    tangon['code'] = option;
    var _closure1_slot11 = tangon;
    tangon = golfie.memo;
    michal = function() { // Original name: VoicePanelDismissibleContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = _closure1_slot4;
            zuuluu = option.useContext;
            oscard = _closure1_slot1;
            foxtra = _closure1_slot2;
            michal = 8;
            michal = foxtra[michal];
            tangon = undefined;
            michal = oscard.bind(tangon)(michal);
            michal = zuuluu.bind(option)(michal);
            zuuluu = michal.channelId;
            var _closure2_slot0 = zuuluu;
            verify = michal.focused;
            var _closure2_slot1 = verify;
            backup = michal.mode;
            var _closure2_slot2 = backup;
            oscard = option.useState;
            michal = false;
            golfie = oscard.bind(option)(michal);
            oscard = _closure1_slot3;
            michal = 2;
            golfie = oscard.bind(tangon)(golfie, michal);
            michal = 0;
            michal = golfie[michal];
            oscard = 1;
            oscard = golfie[oscard];
            var _closure2_slot3 = oscard;
            golfie = option.useCallback;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = argFoo;
                    entity = null;
                    zuuluu = entity != oscard;
                    if(!zuuluu) { _fun00004_ip = 49; continue _fun00003 }
 12:
                    tangon = _closure1_slot7;
                    report = _closure1_slot5;
                    michal = report.getParticipant;
                    entity = _closure2_slot0;
                    michal = michal.bind(report)(entity, oscard);
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(michal);
 49:
                    michal = _closure2_slot3;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            offset = golfie.bind(option)(zuuluu, oscard);
            var _closure2_slot4 = offset;
            romeon = _closure1_slot0;
            yankee = 9;
            zuuluu = foxtra[yankee];
            option = romeon.bind(tangon)(zuuluu);
            golfie = option.useAnimatedReaction;
            oscard = function() { // Original name: h
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot2;
                    entity = michal.get;
                    report = entity.bind(michal)();
                    entity = _closure1_slot6;
                    tangon = entity.PANEL;
                    entity = undefined;
                    if(!(report === tangon)) { _fun00006_ip = 67; continue _fun00005 }
 35:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = null;
                    tangon = tangon == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00006_ip = 64; continue _fun00005 }
 59:
                    michal = zuuluu.id;
 64:
                    entity = michal;
 67:
                    return entity;
                }
            };
            zuuluu = {};
            zuuluu['mode'] = backup;
            backup = _closure1_slot6;
            zuuluu['VoicePanelModes'] = backup;
            zuuluu['focused'] = verify;
            oscard['__closure'] = zuuluu;
            zuuluu = 11330064461661.0;
            oscard['__workletHash'] = zuuluu;
            zuuluu = _closure1_slot10;
            oscard['__initData'] = zuuluu;
            zuuluu = function(argFoo, argBar) { // Original name: f
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    entity = argBar;
                    if(!(zuuluu !== entity)) { _fun00008_ip = 57; continue _fun00007 }
 10:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 9;
                    entity = michal[entity];
                    michal = undefined;
                    report = tangon.bind(michal)(entity);
                    tangon = report.runOnJS;
                    entity = _closure2_slot4;
                    entity = tangon.bind(report)(entity);
                    entity = entity.bind(michal)(zuuluu);
 57:
                    entity = undefined;
                    return entity;
                }
            };
            verify = {};
            yankee = foxtra[yankee];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.runOnJS;
            verify['runOnJS'] = yankee;
            verify['handleFocusChange'] = offset;
            zuuluu['__closure'] = verify;
            verify = 15579591345007.0;
            zuuluu['__workletHash'] = verify;
            verify = _closure1_slot11;
            zuuluu['__initData'] = verify;
            zuuluu = golfie.bind(option)(oscard, zuuluu);
            if(michal) { _fun00002_ip = 302; continue _fun00001 }
 296:
            oscard = new Array(0);
            _fun00002_ip = 345; continue _fun00001;
 302:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 10;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.DismissibleContent;
            zuuluu = michal.ACTIVITIES_MOBILE_PIP_FAB_NUX;
            michal = new Array(1);
            michal[0] = zuuluu;
            oscard = michal;
 345:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 11;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['contentTypes'] = oscard;
            report = function(argFoo) { // Original name: children
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.visibleContent;
                    golfie = entity.markAsDismissed;
                    michal = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 10;
                    entity = tangon[entity];
                    report = undefined;
                    entity = michal.bind(report)(entity);
                    entity = entity.DismissibleContent;
                    michal = entity.ACTIVITIES_MOBILE_PIP_FAB_NUX;
                    entity = null;
                    if(!(zuuluu === michal)) { _fun00010_ip = 121; continue _fun00009 }
 58:
                    tangon = _closure1_slot8;
                    zuuluu = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 12;
                    michal = option[michal];
                    michal = zuuluu.bind(report)(michal);
                    zuuluu = michal.DismissibleActionSheet;
                    michal = {};
                    michal['markAsDismissed'] = golfie;
                    oscard = _closure1_slot9;
                    michal['importer'] = oscard;
                    oscard = 'VoiceControlToggleNuxActionSheet';
                    michal['actionSheetKey'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 121:
                    return entity;
                }
            };
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();