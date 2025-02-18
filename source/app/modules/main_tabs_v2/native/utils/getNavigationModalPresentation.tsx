// app/modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
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
        tangon = {};
        golfie = 0;
        option = oscard[golfie];
        entity = undefined;
        verify = report.bind(entity)(option);
        option = verify.isAndroid;
        option = option.bind(verify)();
        if(option) { _fun00002_ip = 115; continue _fun00001 }
 78:
        option = 2;
        option = oscard[option];
        verify = report.bind(entity)(option);
        option = verify.isIpadOS;
        verify = option.bind(verify)();
        option = 'modal';
        if(!verify) { _fun00002_ip = 113; continue _fun00001 }
 107:
        option = 'fullScreenModal';
 113:
        _fun00002_ip = 153; continue _fun00001;
 115:
        verify = 1;
        verify = oscard[verify];
        offset = report.bind(entity)(verify);
        verify = offset.getIsWindowLarge;
        offset = verify.bind(offset)();
        verify = 'modal';
        if(!offset) { _fun00002_ip = 150; continue _fun00001 }
 144:
        verify = 'fullScreenModal';
 150:
        option = verify;
 153:
        tangon['presentation'] = option;
        golfie = oscard[golfie];
        option = report.bind(entity)(golfie);
        golfie = option.isAndroid;
        golfie = golfie.bind(option)();
        golfie = !golfie;
        tangon['lockOrientation'] = golfie;
        var _closure1_slot2 = tangon;
        tangon = 4;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx';
        tangon = report.bind(oscard)(tangon);
        michal = function() { // Original name: getNavigationModalPresentation
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = arguments[0];
                oscard = undefined;
                if(!(entity === oscard)) { _fun00004_ip = 16; continue _fun00003 }
 9:
                entity = _closure1_slot2;
 16:
                michal = entity.presentation;
                if(!(michal === oscard)) { _fun00004_ip = 39; continue _fun00003 }
 26:
                zuuluu = _closure1_slot2;
                michal = zuuluu.presentation;
 39:
                zuuluu = entity.lockOrientation;
                if(!(zuuluu === oscard)) { _fun00004_ip = 78; continue _fun00003 }
 49:
                entity = _closure1_slot2;
                entity = entity.lockOrientation;
                if(!entity) { _fun00004_ip = 75; continue _fun00003 }
 65:
                tangon = 'transparentModal';
                entity = tangon !== michal;
 75:
                zuuluu = entity;
 78:
                entity = {};
                entity['presentation'] = michal;
                michal = undefined;
                if(!zuuluu) { _fun00004_ip = 161; continue _fun00003 }
 90:
                tangon = _closure1_slot0;
                golfie = _closure1_slot1;
                zuuluu = 3;
                report = golfie[zuuluu];
                option = tangon.bind(oscard)(report);
                report = option.getOrientation;
                report = report.bind(option)();
                zuuluu = golfie[zuuluu];
                zuuluu = tangon.bind(oscard)(zuuluu);
                zuuluu = zuuluu.OrientationType;
                tangon = zuuluu.PORTRAIT;
                zuuluu = 'landscape';
                if(!(report === tangon)) { _fun00004_ip = 158; continue _fun00003 }
 152:
                zuuluu = 'portrait';
 158:
                michal = zuuluu;
 161:
                entity['orientation'] = michal;
                return entity;
            }
        };
        zuuluu['default'] = michal;
        return entity;
    }
})();