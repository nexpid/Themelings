// app/design/components/Sheet/native/ActionSheetRow.native.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: ActionSheetRow
        _fun77347: for(var _fun77347_ip = 0; ; ) switch(_fun77347_ip) {
 0:
            zulu = argFoo;
            yankee = zulu.label;
            romeo = zulu.variant;
            tango = undefined;
            if(!(romeo === tango)) { _fun77347_ip = 23; continue _fun77347 }
 19:
            romeo = 'default';
 23:
            offset = zulu.arrow;
            verify = zulu.icon;
            mike = {'label': 0, 'variant': 0, 'arrow': 0, 'icon': 0};
            kilo = null;
            sizing = mike;
            entity = silentSetPrototypeOf(sizing, kilo);
            sizing = {};
            kilo = zulu;
            backup = mike;
            kilo = copyDataProperties(sizing, kilo, backup);
            zulu = _closure1_slot4;
            entity = _closure1_slot5;
            mike = entity.Provider;
            entity = {};
            entity['value'] = romeo;
            golf = _closure1_slot4;
            oscar = _closure1_slot0;
            foxtrot = _closure1_slot1;
            report = 3;
            report = foxtrot[report];
            report = oscar.bind(tango)(report);
            oscar = report.TableRow;
            report = {};
            report['variant'] = romeo;
            report['label'] = yankee;
            report['arrow'] = offset;
            report['icon'] = verify;
            sizing = report;
            options = copyDataProperties(sizing, kilo);
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    verify = report.bind(entity)(options);
    var _closure1_slot2 = verify;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.View;
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot4 = report;
    options = verify.createContext;
    report = 'default';
    report = options.bind(verify)(report);
    var _closure1_slot5 = report;
    report = function(argFoo) { // Original name: ActionSheetRowIcon
        _fun77348: for(var _fun77348_ip = 0; ; ) switch(_fun77348_ip) {
 0:
            entity = argFoo;
            oscar = entity.source;
            golf = entity.IconComponent;
            tango = _closure1_slot2;
            zulu = tango.useContext;
            mike = _closure1_slot5;
            report = zulu.bind(tango)(mike);
            tango = _closure1_slot4;
            mike = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 4;
            entity = zulu[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.TableRowIcon;
            entity = {};
            entity['source'] = oscar;
            oscar = null;
            options = oscar != golf;
            oscar = undefined;
            if(!options) { _fun77348_ip = 88; continue _fun77348 }
 85:
            oscar = golf;
 88:
            entity['IconComponent'] = oscar;
            entity['variant'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    tango['Icon'] = report;
    report = function(argFoo) { // Original name: ActionSheetRowGroup
        entity = argFoo;
        golf = entity.children;
        options = entity.title;
        verify = entity.hasIcons;
        tango = _closure1_slot4;
        zulu = _closure1_slot3;
        mike = {};
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        entity = 5;
        report = report[entity];
        entity = undefined;
        report = oscar.bind(entity)(report);
        oscar = report.TableRowGroup;
        report = {};
        report['hasIcons'] = verify;
        report['title'] = options;
        report['children'] = golf;
        report = tango.bind(entity)(oscar, report);
        mike['children'] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango['Group'] = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/Sheet/native/ActionSheetRow.native.tsx';
    report = oscar.bind(golf)(report);
    zulu['ActionSheetRow'] = tango;
    mike = function(argFoo) { // Original name: ActionSheetSwitchRow
        tango = _closure1_slot4;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 6;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.TableSwitchRow;
        entity = {};
        oscar = argFoo;
        golf = entity;
        report = copyDataProperties(golf, oscar);
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['ActionSheetSwitchRow'] = mike;
    return entity;
})();