// app/modules/main_tabs_v2/native/settings/definitions/SelectWebBrowserSetting.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = {};
    option = 1;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.RendererType;
    option = option.RADIO;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 3;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.C+DkPj;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.WEB_BROWSER;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useWebBrowserSettingValue
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.useBrowserManagerSelectedBrowser;
        entity = entity.bind(michal)();
        return entity;
    };
    michal['useValue'] = golfie;
    golfie = function(argFoo) { // Original name: onWebBrowserSettingValueChange
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.browserManagerSelectBrowser;
        michal = global;
        report = michal.Number;
        michal = argFoo;
        michal = report.bind(entity)(michal);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['onValueChange'] = golfie;
    tangon = function() { // Original name: useWebBrowserSettingOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            entity = zuuluu[entity];
            oscard = undefined;
            michal = report.bind(oscard)(entity);
            entity = michal.useBrowserManagerIsChromeInstalled;
            michal = entity.bind(michal)();
            entity = new Array(0);
            verify = entity.push;
            option = {};
            romeon = 3;
            golfie = zuuluu[romeon];
            golfie = report.bind(oscard)(golfie);
            yankee = golfie.intl;
            offset = yankee.string;
            golfie = zuuluu[romeon];
            golfie = report.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.YayR6O;
            golfie = offset.bind(yankee)(golfie);
            option['label'] = golfie;
            golfie = 4;
            offset = zuuluu[golfie];
            offset = report.bind(oscard)(offset);
            offset = offset.WebBrowserType;
            offset = offset.IN_APP;
            option['value'] = offset;
            option = verify.bind(entity)(option);
            verify = 5;
            zuuluu = zuuluu[verify];
            report = report.bind(oscard)(zuuluu);
            zuuluu = report.isAndroid;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00002_ip = 251; continue _fun00001 }
 156:
            report = entity.push;
            zuuluu = {};
            offset = _closure1_slot0;
            option = _closure1_slot1;
            yankee = option[romeon];
            yankee = offset.bind(oscard)(yankee);
            backup = yankee.intl;
            foxtra = backup.string;
            yankee = option[romeon];
            yankee = offset.bind(oscard)(yankee);
            yankee = yankee.t;
            yankee = yankee.T5W6+P;
            yankee = foxtra.bind(backup)(yankee);
            zuuluu['label'] = yankee;
            option = option[golfie];
            option = offset.bind(oscard)(option);
            option = option.WebBrowserType;
            option = option.SAFARI;
            zuuluu['value'] = option;
            zuuluu = report.bind(entity)(zuuluu);
 251:
            if(!michal) { _fun00002_ip = 404; continue _fun00001 }
 257:
            zuuluu = entity.push;
            michal = {};
            option = _closure1_slot0;
            report = _closure1_slot1;
            report = report[verify];
            option = option.bind(oscard)(report);
            report = option.isAndroid;
            report = report.bind(option)();
            yankee = _closure1_slot0;
            option = _closure1_slot1;
            verify = option[romeon];
            verify = yankee.bind(oscard)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = option[romeon];
            option = yankee.bind(oscard)(option);
            option = option.t;
            if(report) { _fun00002_ip = 349; continue _fun00001 }
 334:
            report = option.FfjVVl;
            report = verify.bind(offset)(report);
            _fun00002_ip = 362; continue _fun00001;
 349:
            option = option.kEfv8/;
            report = verify.bind(offset)(option);
 362:
            michal['label'] = report;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.WebBrowserType;
            tangon = tangon.CHROME;
            michal['value'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 404:
            return entity;
        }
    };
    michal['useOptions'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/SelectWebBrowserSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();