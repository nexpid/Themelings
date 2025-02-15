// app/modules/main_tabs_v2/native/settings/definitions/SelectWebBrowserSetting.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = {};
    options = 1;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.RendererType;
    options = options.RADIO;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 3;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.C+DkPj;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    golf = golf.WEB_BROWSER;
    mike['parent'] = golf;
    golf = function() { // Original name: useWebBrowserSettingValue
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        entity = mike.useBrowserManagerSelectedBrowser;
        entity = entity.bind(mike)();
        return entity;
    };
    mike['useValue'] = golf;
    golf = function(argFoo) { // Original name: onWebBrowserSettingValueChange
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.browserManagerSelectBrowser;
        mike = global;
        report = mike.Number;
        mike = argFoo;
        mike = report.bind(entity)(mike);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['onValueChange'] = golf;
    tango = function() { // Original name: useWebBrowserSettingOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            entity = zulu[entity];
            oscar = undefined;
            mike = report.bind(oscar)(entity);
            entity = mike.useBrowserManagerIsChromeInstalled;
            mike = entity.bind(mike)();
            entity = new Array(0);
            verify = entity.push;
            options = {};
            romeo = 3;
            golf = zulu[romeo];
            golf = report.bind(oscar)(golf);
            yankee = golf.intl;
            offset = yankee.string;
            golf = zulu[romeo];
            golf = report.bind(oscar)(golf);
            golf = golf.t;
            golf = golf.YayR6O;
            golf = offset.bind(yankee)(golf);
            options['label'] = golf;
            golf = 4;
            offset = zulu[golf];
            offset = report.bind(oscar)(offset);
            offset = offset.WebBrowserType;
            offset = offset.IN_APP;
            options['value'] = offset;
            options = verify.bind(entity)(options);
            verify = 5;
            zulu = zulu[verify];
            report = report.bind(oscar)(zulu);
            zulu = report.isAndroid;
            zulu = zulu.bind(report)();
            if(zulu) { _fun00002_ip = 247; continue _fun00001 }
 154:
            report = entity.push;
            zulu = {};
            offset = _closure1_slot0;
            options = _closure1_slot1;
            yankee = options[romeo];
            yankee = offset.bind(oscar)(yankee);
            backup = yankee.intl;
            foxtrot = backup.string;
            yankee = options[romeo];
            yankee = offset.bind(oscar)(yankee);
            yankee = yankee.t;
            yankee = yankee.T5W6+P;
            yankee = foxtrot.bind(backup)(yankee);
            zulu['label'] = yankee;
            options = options[golf];
            options = offset.bind(oscar)(options);
            options = options.WebBrowserType;
            options = options.SAFARI;
            zulu['value'] = options;
            zulu = report.bind(entity)(zulu);
 247:
            if(!mike) { _fun00002_ip = 396; continue _fun00001 }
 253:
            zulu = entity.push;
            mike = {};
            options = _closure1_slot0;
            report = _closure1_slot1;
            report = report[verify];
            options = options.bind(oscar)(report);
            report = options.isAndroid;
            report = report.bind(options)();
            yankee = _closure1_slot0;
            options = _closure1_slot1;
            verify = options[romeo];
            verify = yankee.bind(oscar)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = options[romeo];
            options = yankee.bind(oscar)(options);
            options = options.t;
            if(report) { _fun00002_ip = 343; continue _fun00001 }
 330:
            report = options.FfjVVl;
            report = verify.bind(offset)(report);
            _fun00002_ip = 354; continue _fun00001;
 343:
            options = options.kEfv8/;
            report = verify.bind(offset)(options);
 354:
            mike['label'] = report;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[golf];
            tango = report.bind(oscar)(tango);
            tango = tango.WebBrowserType;
            tango = tango.CHROME;
            mike['value'] = tango;
            mike = zulu.bind(entity)(mike);
 396:
            return entity;
        }
    };
    mike['useOptions'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/SelectWebBrowserSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();