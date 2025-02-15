// app/modules/user_settings/native/components/UserSettingsSurveyChangelogOverride.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = function(argFoo) { // Original name: SurveyOverrideInfoActionSheet
        entity = argFoo;
        offset = entity.survey;
        tango = _closure1_slot9;
        oscar = _closure1_slot0;
        options = _closure1_slot3;
        entity = 8;
        entity = options[entity];
        zulu = undefined;
        entity = oscar.bind(zulu)(entity);
        mike = entity.ActionSheet;
        entity = {};
        yankee = _closure1_slot9;
        golf = 9;
        golf = options[golf];
        golf = oscar.bind(zulu)(golf);
        verify = golf.BottomSheetTitleHeader;
        golf = {};
        romeo = 'Last Survey Data';
        golf['title'] = romeo;
        golf = yankee.bind(zulu)(verify, golf);
        entity['header'] = golf;
        golf = _closure1_slot9;
        report = 10;
        report = options[report];
        report = oscar.bind(zulu)(report);
        report = report.ActionSheetRow;
        oscar = report.Group;
        report = {};
        options = global;
        verify = options.Object;
        options = verify.entries;
        offset = options.bind(verify)(offset);
        verify = offset.map;
        options = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = argFoo;
                entity = zulu[Symbol.iterator];
                zulu = entity().next;
                golf = zulu().value;
                mike = entity;
                report = undefined;
                mike = mike === report;
                tango = undefined;
                if(mike) { _fun00002_ip = 29; continue _fun00001 }
 26:
                tango = golf;
 29:
                yankee = undefined;
                if(mike) { _fun00002_ip = 59; continue _fun00001 }
 34:
                golf = zulu().value;
                zulu = entity;
                zulu = zulu === report;
                yankee = undefined;
                mike = zulu;
                if(zulu) { _fun00002_ip = 59; continue _fun00001 }
 53:
                yankee = golf;
                mike = zulu;
 59:
                var _closure3_slot0 = yankee;
                if(mike) { _fun00002_ip = 69; continue _fun00001 }
 66:
                entity.return();
 69:
                zulu = _closure1_slot9;
                mike = _closure1_slot0;
                options = _closure1_slot3;
                entity = 10;
                entity = options[entity];
                entity = mike.bind(report)(entity);
                mike = entity.ActionSheetRow;
                entity = {};
                entity['label'] = tango;
                options = null;
                verify = options != yankee;
                options = 'null';
                if(!verify) { _fun00002_ip = 140; continue _fun00001 }
 121:
                verify = global;
                offset = verify.JSON;
                verify = offset.stringify;
                options = verify.bind(offset)(yankee);
 140:
                entity['subLabel'] = options;
                verify = _closure1_slot9;
                options = _closure1_slot0;
                offset = _closure1_slot3;
                golf = 11;
                golf = offset[golf];
                golf = options.bind(report)(golf);
                options = golf.CopyIcon;
                golf = {};
                golf = verify.bind(report)(options, golf);
                entity['icon'] = golf;
                oscar = function() { // Original name: onPress
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 12;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.copy;
                        oscar = _closure3_slot0;
                        mike = null;
                        oscar = mike != oscar;
                        mike = 'null';
                        if(!oscar) { _fun00004_ip = 74; continue _fun00003 }
 51:
                        oscar = global;
                        golf = oscar.JSON;
                        oscar = golf.stringify;
                        report = _closure3_slot0;
                        mike = oscar.bind(golf)(report);
 74:
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    }
                };
                entity['onPress'] = oscar;
                entity = zulu.bind(report)(mike, entity, tango);
                return entity;
            }
        };
        options = verify.bind(offset)(options);
        report['children'] = options;
        report = golf.bind(zulu)(oscar, report);
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: SurveyOverrideActionSheet
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot5;
            mike = zulu.useState;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure1_slot8;
                    entity = mike.getSurveyOverride;
                    mike = entity.bind(mike)();
                    entity = null;
                    zulu = entity != mike;
                    if(!zulu) { _fun00008_ip = 31; continue _fun00007 }
 28:
                    entity = mike;
 31:
                    return entity;
                }
            };
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            tango = undefined;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            entity = 0;
            romeo = mike[entity];
            var _closure2_slot0 = romeo;
            entity = 1;
            foxtrot = mike[entity];
            zulu = _closure1_slot10;
            golf = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 8;
            entity = offset[entity];
            entity = golf.bind(tango)(entity);
            mike = entity.ActionSheet;
            entity = {};
            yankee = _closure1_slot9;
            report = 9;
            report = offset[report];
            report = golf.bind(tango)(report);
            options = report.BottomSheetTitleHeader;
            report = {};
            backup = 'Survey Override';
            report['title'] = backup;
            report = yankee.bind(tango)(options, report);
            entity['header'] = report;
            yankee = _closure1_slot9;
            report = 13;
            report = offset[report];
            report = golf.bind(tango)(report);
            options = report.TextInput;
            report = {'label': 'Survey Override', 'size': 'md', 'placeholder': 'Enter the ID of the Survey you want to test', 'onChange': null, 'isClearable': true};
            report['onChange'] = foxtrot;
            options = yankee.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot9;
            oscar = 14;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Button;
            oscar = {};
            offset = '';
            yankee = offset === romeo;
            offset = 'Fetch Survey';
            if(!yankee) { _fun00006_ip = 237; continue _fun00005 }
 231:
            offset = 'Reset Survey Override';
 237:
            oscar['text'] = offset;
            offset = 'destructive';
            if(yankee) { _fun00006_ip = 270; continue _fun00005 }
 250:
            yankee = null;
            romeo = yankee == romeo;
            yankee = 'primary';
            if(!romeo) { _fun00006_ip = 267; continue _fun00005 }
 263:
            yankee = 'secondary';
 267:
            offset = yankee;
 270:
            oscar['variant'] = offset;
            verify = function() { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = '';
                    if(!(mike !== zulu)) { _fun00010_ip = 57; continue _fun00009 }
 15:
                    tango = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 15;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.overrideSurvey;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
                    _fun00010_ip = 95; continue _fun00009;
 57:
                    zulu = _closure1_slot2;
                    mike = _closure1_slot3;
                    entity = 15;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.overrideSurvey;
                    entity = null;
                    entity = mike.bind(zulu)(entity);
 95:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.hideActionSheet;
                    mike = 'SurveyOverrideActionSheet';
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            oscar['onPress'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: SurveyInfo
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golf = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 17;
            entity = verify[entity];
            tango = undefined;
            report = golf.bind(tango)(entity);
            zulu = report.useStateFromStores;
            entity = _closure1_slot8;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot8;
                entity = mike.getCurrentSurvey;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot1;
            entity = 18;
            entity = verify[entity];
            entity = zulu.bind(tango)(entity);
            yankee = entity.bind(tango)(mike);
            var _closure2_slot0 = yankee;
            zulu = _closure1_slot10;
            entity = 19;
            entity = verify[entity];
            entity = golf.bind(tango)(entity);
            mike = entity.TableRowGroup;
            entity = {};
            report = 'Surveys';
            entity['title'] = report;
            foxtrot = _closure1_slot9;
            oscar = 20;
            report = verify[oscar];
            report = golf.bind(tango)(report);
            romeo = report.TableRow;
            report = {'label': 'Survey override', 'subLabel': 'Force a survey to be shown.', 'arrow': true};
            backup = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.openLazy;
                mike = global;
                oscar = mike.Promise;
                zulu = oscar.resolve;
                mike = {};
                golf = _closure1_slot13;
                mike['default'] = golf;
                zulu = zulu.bind(oscar)(mike);
                mike = 'SurveyOverrideActionSheet';
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            report['onPress'] = backup;
            romeo = foxtrot.bind(tango)(romeo, report);
            report = new Array(2);
            report[0] = romeo;
            options = _closure1_slot9;
            oscar = verify[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.TableRow;
            oscar = {};
            verify = 'Previous survey data';
            oscar['label'] = verify;
            verify = null;
            foxtrot = verify == yankee;
            romeo = undefined;
            if(!foxtrot) { _fun00012_ip = 225; continue _fun00011 }
 219:
            romeo = 'No survey data';
 225:
            oscar['subLabel'] = romeo;
            romeo = verify != yankee;
            oscar['arrow'] = romeo;
            yankee = verify != yankee;
            verify = undefined;
            if(!yankee) { _fun00012_ip = 255; continue _fun00011 }
 248:
            verify = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.openLazy;
                mike = global;
                tango = mike.Promise;
                zulu = tango.resolve;
                mike = {};
                golf = _closure1_slot12;
                mike['default'] = golf;
                tango = zulu.bind(tango)(mike);
                zulu = {};
                mike = _closure2_slot0;
                zulu['survey'] = mike;
                mike = 'SurveyOverrideInfoActionSheet';
                mike = report.bind(oscar)(tango, mike, zulu);
                return entity;
            };
 255:
            oscar['onPress'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: ChangelogOverrideDebuggingActionSheet
        tango = _closure1_slot9;
        oscar = _closure1_slot0;
        options = _closure1_slot3;
        entity = 8;
        entity = options[entity];
        zulu = undefined;
        entity = oscar.bind(zulu)(entity);
        mike = entity.ActionSheet;
        entity = {};
        offset = _closure1_slot9;
        report = 9;
        report = options[report];
        report = oscar.bind(zulu)(report);
        golf = report.BottomSheetTitleHeader;
        report = {};
        yankee = 'Changelog Debugging';
        report['title'] = yankee;
        report = offset.bind(zulu)(golf, report);
        entity['header'] = report;
        golf = _closure1_slot9;
        report = 21;
        report = options[report];
        report = oscar.bind(zulu)(report);
        oscar = report.Text;
        report = {};
        options = 'text-md/semibold';
        report['variant'] = options;
        options = global;
        romeo = options.JSON;
        yankee = romeo.stringify;
        offset = _closure1_slot7;
        verify = offset.getStateForDebugging;
        offset = verify.bind(offset)();
        verify = '\t';
        offset = yankee.bind(romeo)(offset, zulu, verify);
        options = options.HermesInternal;
        verify = options.concat;
        options = '';
        options = verify.bind(options)(offset);
        report['children'] = options;
        report = golf.bind(zulu)(oscar, report);
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: ChangelogOverrideActionSheet
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = _closure1_slot5;
            mike = zulu.useState;
            entity = function() {
                mike = _closure1_slot7;
                entity = mike.overrideId;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            tango = undefined;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            entity = 0;
            romeo = mike[entity];
            var _closure2_slot0 = romeo;
            entity = 1;
            foxtrot = mike[entity];
            zulu = _closure1_slot10;
            golf = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 8;
            entity = offset[entity];
            entity = golf.bind(tango)(entity);
            mike = entity.ActionSheet;
            entity = {};
            yankee = _closure1_slot9;
            report = 9;
            report = offset[report];
            report = golf.bind(tango)(report);
            options = report.BottomSheetTitleHeader;
            report = {};
            backup = 'Changelog Override';
            report['title'] = backup;
            report = yankee.bind(tango)(options, report);
            entity['header'] = report;
            yankee = _closure1_slot9;
            report = 13;
            report = offset[report];
            report = golf.bind(tango)(report);
            options = report.TextInput;
            report = {'label': 'Changelog Override', 'size': 'md', 'placeholder': 'Enter the ID of the changelog you want to test', 'onChange': null, 'isClearable': true};
            report['onChange'] = foxtrot;
            options = yankee.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot9;
            oscar = 14;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Button;
            oscar = {};
            offset = '';
            yankee = offset === romeo;
            offset = 'Fetch Changelog';
            if(!yankee) { _fun00014_ip = 237; continue _fun00013 }
 231:
            offset = 'Reset Changelog Override';
 237:
            oscar['text'] = offset;
            offset = 'destructive';
            if(yankee) { _fun00014_ip = 270; continue _fun00013 }
 250:
            yankee = null;
            romeo = yankee == romeo;
            yankee = 'primary';
            if(!romeo) { _fun00014_ip = 267; continue _fun00013 }
 263:
            yankee = 'secondary';
 267:
            offset = yankee;
 270:
            oscar['variant'] = offset;
            verify = function() { // Original name: onPress
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = '';
                    if(!(mike !== zulu)) { _fun00016_ip = 57; continue _fun00015 }
 15:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 22;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.setChangelogOverride;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
                    _fun00016_ip = 95; continue _fun00015;
 57:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 22;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.setChangelogOverride;
                    entity = null;
                    entity = mike.bind(zulu)(entity);
 95:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.hideActionSheet;
                    mike = 'ChangelogOverrideActionSheet';
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            oscar['onPress'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: ChangelogInfo
        tango = _closure1_slot10;
        golf = _closure1_slot0;
        offset = _closure1_slot3;
        entity = 19;
        entity = offset[entity];
        zulu = undefined;
        entity = golf.bind(zulu)(entity);
        mike = entity.TableRowGroup;
        entity = {};
        report = 'Changelog';
        entity['title'] = report;
        romeo = _closure1_slot9;
        oscar = 20;
        report = offset[oscar];
        report = golf.bind(zulu)(report);
        yankee = report.TableRow;
        report = {'label': 'Changelog override', 'subLabel': 'Force a changelog to be shown.', 'arrow': true};
        foxtrot = function() { // Original name: onPress
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.openLazy;
            mike = global;
            oscar = mike.Promise;
            zulu = oscar.resolve;
            mike = {};
            golf = _closure1_slot16;
            mike['default'] = golf;
            zulu = zulu.bind(oscar)(mike);
            mike = 'ChangelogOverrideActionSheet';
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report['onPress'] = foxtrot;
        yankee = romeo.bind(zulu)(yankee, report);
        report = new Array(2);
        report[0] = yankee;
        options = _closure1_slot9;
        oscar = offset[oscar];
        oscar = golf.bind(zulu)(oscar);
        golf = oscar.TableRow;
        oscar = {'label': 'Changelog debugging', 'arrow': true};
        verify = function() { // Original name: onPress
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.openLazy;
            mike = global;
            oscar = mike.Promise;
            zulu = oscar.resolve;
            mike = {};
            golf = _closure1_slot15;
            mike['default'] = golf;
            zulu = zulu.bind(oscar)(mike);
            mike = 'ChangelogOverrideDebuggingActionSheet';
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        oscar['onPress'] = verify;
        oscar = options.bind(zulu)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    golf = golf.bind(entity)(tango);
    var _closure1_slot5 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ScrollView;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot9 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 7;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    offset['padding'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = yankee;
    tango['scrollView'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot11 = tango;
    tango = golf.memo;
    mike = function() { // Original name: UserSettingsSurveyChangelogOverride
        entity = _closure1_slot11;
        tango = undefined;
        report = entity.bind(tango)();
        zulu = _closure1_slot9;
        mike = _closure1_slot6;
        entity = {};
        report = report.scrollView;
        entity['style'] = report;
        golf = _closure1_slot10;
        oscar = _closure1_slot0;
        options = _closure1_slot3;
        report = 23;
        report = options[report];
        report = oscar.bind(tango)(report);
        oscar = report.Stack;
        report = {};
        options = 16;
        report['spacing'] = options;
        yankee = _closure1_slot9;
        offset = _closure1_slot14;
        options = {};
        offset = yankee.bind(tango)(offset, options);
        options = new Array(2);
        options[0] = offset;
        yankee = _closure1_slot9;
        offset = _closure1_slot17;
        verify = {};
        verify = yankee.bind(tango)(offset, verify);
        options[1] = verify;
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 24;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/components/UserSettingsSurveyChangelogOverride.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();