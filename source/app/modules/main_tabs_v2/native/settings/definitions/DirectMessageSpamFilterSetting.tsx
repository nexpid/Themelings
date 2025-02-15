// app/modules/main_tabs_v2/native/settings/definitions/DirectMessageSpamFilterSetting.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
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
    golf = oscar[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(golf);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.RendererType;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ExplicitContentFilterToDmSpamFilterV2;
    var _closure1_slot3 = mike;
    mike = {};
    options = options.RADIO;
    mike['type'] = options;
    options = 7;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    offset = verify.intl;
    verify = offset.string;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.t;
    options = options.tiCXaG;
    options = verify.bind(offset)(options);
    mike['title'] = options;
    golf = golf.CONTENT_AND_SOCIAL;
    mike['parent'] = golf;
    golf = function() { // Original name: useDmSpamFilterSettingOptions
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.generateDmSpamOptions;
            zulu = entity.bind(mike)();
            mike = zulu.map;
            entity = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.value;
                entity['value'] = zulu;
                zulu = mike.name;
                entity['label'] = zulu;
                mike = mike.desc;
                entity['subLabel'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useOptions'] = golf;
    golf = function() { // Original name: useDmSpamFilterSettingValue
        _fun94733: for(var _fun94733_ip = 0; ; ) switch(_fun94733_ip) {
 0:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            oscar = 4;
            entity = mike[oscar];
            report = undefined;
            entity = tango.bind(report)(entity);
            golf = entity.DmSpamFilterV2;
            entity = golf.useSetting;
            entity = entity.bind(golf)();
            oscar = mike[oscar];
            oscar = tango.bind(report)(oscar);
            golf = oscar.ExplicitContentFilter;
            oscar = golf.useSetting;
            golf = oscar.bind(golf)();
            oscar = 5;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.DmSpamFilterV2;
            mike = mike.DEFAULT_UNSET;
            if(!(entity === mike)) { _fun94733_ip = 146; continue _fun94733 }
 94:
            tango = _closure1_slot3;
            mike = tango.get;
            mike = mike.bind(tango)(golf);
            tango = null;
            if(!(tango == mike)) { _fun94733_ip = 143; continue _fun94733 }
 114:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[oscar];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.DmSpamFilterV2;
            mike = zulu.NON_FRIENDS;
 143:
            entity = mike;
 146:
            return entity;
        }
    };
    mike['useValue'] = golf;
    golf = function(argFoo) { // Original name: onDmSpamFilterSettingValueChange
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.DmSpamFilterV2;
        zulu = tango.updateSetting;
        mike = global;
        report = mike.Number;
        mike = argFoo;
        mike = report.bind(entity)(mike);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['onValueChange'] = golf;
    tango = function() { // Original name: additionalSearchTerms
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        mike = 7;
        entity = golf[mike];
        report = undefined;
        entity = oscar.bind(report)(entity);
        tango = entity.intl;
        zulu = tango.string;
        entity = golf[mike];
        entity = oscar.bind(report)(entity);
        entity = entity.t;
        entity = entity.H9XOl5;
        zulu = zulu.bind(tango)(entity);
        entity = new Array(2);
        entity[0] = zulu;
        zulu = golf[mike];
        zulu = oscar.bind(report)(zulu);
        tango = zulu.intl;
        zulu = tango.string;
        mike = golf[mike];
        mike = oscar.bind(report)(mike);
        mike = mike.t;
        mike = mike.k4W40N;
        mike = zulu.bind(tango)(mike);
        entity[1] = mike;
        return entity;
    };
    mike['additionalSearchTerms'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/DirectMessageSpamFilterSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();