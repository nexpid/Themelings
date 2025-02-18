// app/modules/voice_panel/native/utils/computeCardBorderRadius.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    offset = tangon.VoicePanelModes;
    var _closure1_slot0 = offset;
    option = tangon.DEFAULT_BORDER_RADIUS;
    var _closure1_slot1 = option;
    verify = tangon.DEFAULT_BORDER_RADIUS_PIP;
    var _closure1_slot2 = verify;
    tangon = {};
    golfie = 'function computeCardBorderRadius_computeCardBorderRadiusTsx1({id:id,mode:mode,focused:focused,isSelf:isSelf}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PANEL){if(focused!=null){if(focused===id){return 0;}else if(isSelf){return DEFAULT_BORDER_RADIUS_PIP;}}return DEFAULT_BORDER_RADIUS;}if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return DEFAULT_BORDER_RADIUS;}';
    tangon['code'] = golfie;
    michal = function(argFoo) { // Original name: o
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.id;
            oscard = entity.mode;
            zuuluu = entity.focused;
            michal = entity.isSelf;
            report = _closure1_slot0;
            report = report.PANEL;
            if(!(oscard !== report)) { _fun00002_ip = 68; continue _fun00001 }
 42:
            report = _closure1_slot0;
            report = report.PIP;
            if(!(oscard !== report)) { _fun00002_ip = 62; continue _fun00001 }
 56:
            report = _closure1_slot1;
            _fun00002_ip = 66; continue _fun00001;
 62:
            report = _closure1_slot2;
 66:
            return report;
 68:
            report = null;
            if(!(report != zuuluu)) { _fun00002_ip = 81; continue _fun00001 }
 74:
            if(!(zuuluu !== tangon)) { _fun00002_ip = 93; continue _fun00001 }
 78:
            if(michal) { _fun00002_ip = 87; continue _fun00001 }
 81:
            michal = _closure1_slot1;
            return michal;
 87:
            entity = _closure1_slot2;
            return entity;
 93:
            entity = 0;
            return entity;
        }
    };
    golfie = {};
    golfie['VoicePanelModes'] = offset;
    golfie['DEFAULT_BORDER_RADIUS_PIP'] = verify;
    golfie['DEFAULT_BORDER_RADIUS'] = option;
    michal['__closure'] = golfie;
    golfie = 10862086044187.0;
    michal['__workletHash'] = golfie;
    michal['__initData'] = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/utils/computeCardBorderRadius.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();