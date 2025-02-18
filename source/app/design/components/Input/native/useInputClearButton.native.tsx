// app/design/components/Input/native/useInputClearButton.native.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo, argBar) { // Original name: useInputClearButtonConfig
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argBar;
            entity = argFoo;
            entity = entity.isClearable;
            if(!entity) { _fun00002_ip = 24; continue _fun00001 }
 15:
            entity = zuuluu.hasValue;
            if(entity) { _fun00002_ip = 28; continue _fun00001 }
 24:
            entity = undefined;
            return entity;
 28:
            entity = {};
            oscard = _closure1_slot3;
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 3;
            michal = tangon[michal];
            golfie = undefined;
            michal = option.bind(golfie)(michal);
            report = michal.CircleXIcon;
            michal = {};
            verify = 'xs';
            michal['size'] = verify;
            michal = oscard.bind(golfie)(report, michal);
            entity['content'] = michal;
            michal = {};
            zuuluu = zuuluu.clear;
            michal['onPress'] = zuuluu;
            zuuluu = 4;
            report = tangon[zuuluu];
            report = option.bind(golfie)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = tangon[zuuluu];
            tangon = option.bind(golfie)(tangon);
            tangon = tangon.t;
            tangon = tangon.VkKicX;
            tangon = report.bind(oscard)(tangon);
            michal['accessibilityLabel'] = tangon;
            tangon = 'button';
            michal['accessibilityRole'] = tangon;
            michal['hitSlop'] = zuuluu;
            entity['pressableProps'] = michal;
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Pressable;
    var _closure1_slot2 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot3 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/Input/native/useInputClearButton.native.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar) { // Original name: useInputClearButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot4;
            report = undefined;
            zuuluu = argFoo;
            entity = argBar;
            oscard = tangon.bind(report)(zuuluu, entity);
            entity = null;
            zuuluu = entity != oscard;
            if(!zuuluu) { _fun00004_ip = 73; continue _fun00003 }
 30:
            tangon = _closure1_slot3;
            zuuluu = _closure1_slot2;
            michal = {};
            option = oscard.pressableProps;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            golfie = oscard.content;
            oscard = 'children';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 73:
            return entity;
        }
    };
    zuuluu['useInputClearButton'] = tangon;
    zuuluu['useInputClearButtonConfig'] = michal;
    return entity;
})();