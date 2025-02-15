// app/design/components/Sheet/native/SimpleActionSheet.native.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    mike = function(argFoo) { // Original name: SimpleActionSheet
        _fun77353: for(var _fun77353_ip = 0; ; ) switch(_fun77353_ip) {
 0:
            entity = argFoo;
            mike = entity.hideActionSheet;
            var _closure2_slot0 = mike;
            sizing = entity.header;
            yankee = entity.options;
            tango = _closure1_slot3;
            mike = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            entity = zulu[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.ActionSheet;
            entity = {};
            romeo = null;
            golf = romeo != sizing;
            if(!golf) { _fun77353_ip = 210; continue _fun77353 }
 74:
            offset = _closure1_slot2;
            options = _closure1_slot0;
            foxtrot = _closure1_slot1;
            report = 3;
            report = foxtrot[report];
            report = options.bind(zulu)(report);
            options = report.BottomSheetTitleHeader;
            report = {};
            foxtrot = sizing.icon;
            report['leading'] = foxtrot;
            foxtrot = sizing.title;
            report['title'] = foxtrot;
            foxtrot = sizing.subtitle;
            report['subtitle'] = foxtrot;
            foxtrot = sizing.onClose;
            foxtrot = romeo != foxtrot;
            romeo = null;
            if(!foxtrot) { _fun77353_ip = 199; continue _fun77353 }
 151:
            kilo = _closure1_slot2;
            backup = _closure1_slot0;
            output = _closure1_slot1;
            foxtrot = 4;
            foxtrot = output[foxtrot];
            foxtrot = backup.bind(zulu)(foxtrot);
            backup = foxtrot.ActionSheetCloseButton;
            foxtrot = {};
            sizing = sizing.onClose;
            foxtrot['onPress'] = sizing;
            romeo = kilo.bind(zulu)(backup, foxtrot);
 199:
            report['trailing'] = romeo;
            golf = offset.bind(zulu)(options, report);
 210:
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot2;
            golf = _closure1_slot0;
            offset = _closure1_slot1;
            oscar = 5;
            oscar = offset[oscar];
            oscar = golf.bind(zulu)(oscar);
            oscar = oscar.ActionSheetRow;
            golf = oscar.Group;
            oscar = {};
            offset = yankee.map;
            verify = function(argFoo, argBar) {
                _fun77354: for(var _fun77354_ip = 0; ; ) switch(_fun77354_ip) {
 0:
                    mike = argFoo;
                    oscar = mike.label;
                    romeo = mike.icon;
                    yankee = mike.IconComponent;
                    options = mike.isDestructive;
                    mike = mike.onPress;
                    var _closure3_slot0 = mike;
                    report = _closure1_slot2;
                    verify = _closure1_slot0;
                    foxtrot = _closure1_slot1;
                    golf = 5;
                    mike = foxtrot[golf];
                    tango = undefined;
                    mike = verify.bind(tango)(mike);
                    zulu = mike.ActionSheetRow;
                    mike = {};
                    offset = _closure1_slot2;
                    golf = foxtrot[golf];
                    golf = verify.bind(tango)(golf);
                    golf = golf.ActionSheetRow;
                    verify = golf.Icon;
                    golf = {};
                    golf['source'] = romeo;
                    golf['IconComponent'] = yankee;
                    golf = offset.bind(tango)(verify, golf);
                    mike['icon'] = golf;
                    golf = 'default';
                    if(!options) { _fun77354_ip = 130; continue _fun77354 }
 126:
                    golf = 'danger';
 130:
                    mike['variant'] = golf;
                    mike['label'] = oscar;
                    entity = function() { // Original name: onPress
                        mike = _closure2_slot0;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        mike = _closure3_slot0;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    mike['onPress'] = entity;
                    entity = argBar;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify);
            oscar['children'] = verify;
            oscar = options.bind(zulu)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot2 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot3 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Sheet/native/SimpleActionSheet.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    zulu['SimpleActionSheet'] = mike;
    return entity;
})();