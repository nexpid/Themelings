// app/modules/user_profile/native/UserProfileEditNote.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ScrollView;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NOTE_MAX_LENGTH;
    var _closure1_slot6 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'paddingVertical': 24, 'paddingHorizontal': 16, 'gap': 8};
    tango['contentContainer'] = verify;
    verify = {};
    offset = 6;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.INPUT_BACKGROUND;
    verify['backgroundColor'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.lg;
    verify['borderRadius'] = offset;
    offset = 12;
    verify['padding'] = offset;
    tango['inputContainer'] = verify;
    verify = {'paddingVertical': 0, 'paddingHorizontal': 0};
    tango['input'] = verify;
    verify = {'flexGrow': 1, 'lineHeight': 20};
    tango['text'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileEditNote.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: UserProfileEditNote
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            verify = mike.userId;
            var _closure2_slot0 = verify;
            golf = mike.onSave;
            var _closure2_slot1 = golf;
            oscar = mike.onClose;
            var _closure2_slot2 = oscar;
            tango = undefined;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            mike = _closure1_slot9;
            romeo = mike.bind(tango)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 7;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useNavigation;
            kilo = mike.bind(zulu)();
            var _closure2_slot3 = kilo;
            zulu = _closure1_slot1;
            mike = 8;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.bind(tango)(verify);
            offset = mike.loading;
            options = mike.note;
            var _closure2_slot4 = options;
            report = _closure1_slot4;
            zulu = report.useState;
            mike = null;
            foxtrot = mike != options;
            mike = '';
            if(!foxtrot) { _fun00002_ip = 151; continue _fun00001 }
 148:
            mike = options;
 151:
            report = zulu.bind(report)(mike);
            zulu = _closure1_slot3;
            mike = 2;
            zulu = zulu.bind(tango)(report, mike);
            mike = 0;
            backup = zulu[mike];
            _closure2_slot5 = backup;
            mike = 1;
            foxtrot = zulu[mike];
            _closure2_slot6 = foxtrot;
            report = _closure1_slot4;
            zulu = report.useLayoutEffect;
            mike = new Array(6);
            mike[0] = kilo;
            mike[1] = verify;
            mike[2] = options;
            mike[3] = backup;
            mike[4] = golf;
            mike[5] = oscar;
            entity = function() {
                tango = _closure2_slot3;
                zulu = tango.setOptions;
                mike = {};
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 9;
                oscar = oscar[entity];
                entity = undefined;
                options = golf.bind(entity)(oscar);
                golf = options.getHeaderConditionalBackButton;
                oscar = function() {
                    entity = global;
                    zulu = entity.Promise;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    tango = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 10;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = {};
                            options = _closure2_slot4;
                            golf = null;
                            options = golf != options;
                            golf = '';
                            if(!options) { _fun00004_ip = 60; continue _fun00003 }
 56:
                            golf = _closure2_slot4;
 60:
                            oscar = _closure2_slot5;
                            oscar = golf !== oscar;
                            mike['hasEdits'] = oscar;
                            oscar = _closure1_slot0;
                            golf = _closure1_slot2;
                            report = 11;
                            report = golf[report];
                            report = oscar.bind(entity)(report);
                            report = report.dismissKeyboard;
                            mike['onHasEdits'] = report;
                            report = function() { // Original name: resetPending
                                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                    zulu = _closure2_slot6;
                                    tango = _closure2_slot4;
                                    mike = null;
                                    tango = mike != tango;
                                    mike = '';
                                    if(!tango) { _fun00006_ip = 28; continue _fun00005 }
 24:
                                    mike = _closure2_slot4;
 28:
                                    entity = undefined;
                                    entity = zulu.bind(entity)(mike);
                                    return entity;
                                }
                            };
                            mike['resetPending'] = report;
                            tango = function() { // Original name: onConfirm
                                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                    zulu = _closure5_slot0;
                                    entity = undefined;
                                    mike = true;
                                    mike = zulu.bind(entity)(mike);
                                    tango = _closure2_slot2;
                                    zulu = null;
                                    if(!(zulu != tango)) { _fun00008_ip = 37; continue _fun00007 }
 29:
                                    mike = _closure2_slot2;
                                    mike = mike.bind(entity)();
 37:
                                    return entity;
                                }
                            };
                            mike['onConfirm'] = tango;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        }
                    };
                    report = mike;
                    entity = new report[zulu](tango, zulu);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                };
                oscar = golf.bind(options)(oscar);
                mike['headerLeft'] = oscar;
                report = function(argFoo) { // Original name: headerRight
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tango = _closure1_slot7;
                        options = _closure1_slot0;
                        verify = _closure1_slot2;
                        entity = 12;
                        entity = verify[entity];
                        zulu = undefined;
                        entity = options.bind(zulu)(entity);
                        mike = entity.HeaderTextButton;
                        entity = {};
                        offset = argFoo;
                        yankee = entity;
                        report = copyDataProperties(yankee, offset);
                        report = 13;
                        oscar = verify[report];
                        oscar = options.bind(zulu)(oscar);
                        golf = oscar.intl;
                        oscar = golf.string;
                        report = verify[report];
                        report = options.bind(zulu)(report);
                        report = report.t;
                        report = report.R3BPHx;
                        oscar = oscar.bind(golf)(report);
                        report = 'label';
                        entity[report] = oscar;
                        golf = _closure2_slot4;
                        oscar = null;
                        golf = oscar != golf;
                        oscar = '';
                        if(!golf) { _fun00010_ip = 127; continue _fun00009 }
 123:
                        oscar = _closure2_slot4;
 127:
                        report = _closure2_slot5;
                        oscar = oscar === report;
                        report = 'disabled';
                        entity[report] = oscar;
                        oscar = function() { // Original name: onPress
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                zulu = _closure1_slot1;
                                mike = _closure1_slot2;
                                entity = 14;
                                mike = mike[entity];
                                entity = undefined;
                                oscar = zulu.bind(entity)(mike);
                                report = oscar.updateNote;
                                tango = _closure2_slot0;
                                zulu = _closure2_slot5;
                                zulu = report.bind(oscar)(tango, zulu);
                                zulu = _closure2_slot1;
                                tango = null;
                                if(!(tango != zulu)) { _fun00012_ip = 66; continue _fun00011 }
 58:
                                zulu = _closure2_slot1;
                                zulu = zulu.bind(entity)();
 66:
                                zulu = _closure2_slot2;
                                if(!(tango != zulu)) { _fun00012_ip = 82; continue _fun00011 }
 74:
                                mike = _closure2_slot2;
                                mike = mike.bind(entity)();
 82:
                                return entity;
                            }
                        };
                        report = 'onPress';
                        entity[report] = oscar;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    }
                };
                mike['headerRight'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = zulu.bind(report)(entity, mike);
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 15;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.useIsEligibleForClearerNotesLabelExperiment;
            entity = {};
            report = 'UserPrfileEditNote';
            entity['location'] = report;
            report = mike.bind(zulu)(entity);
            oscar = _closure1_slot0;
            entity = _closure1_slot2;
            kilo = 13;
            mike = entity[kilo];
            mike = oscar.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = entity[kilo];
            entity = oscar.bind(tango)(entity);
            entity = entity.t;
            if(report) { _fun00002_ip = 344; continue _fun00001 }
 331:
            report = entity.PbMNh4;
            verify = mike.bind(zulu)(report);
            _fun00002_ip = 355; continue _fun00001;
 344:
            entity = entity.mQKv+v;
            verify = mike.bind(zulu)(entity);
 355:
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            entity = {};
            report = romeo.contentContainer;
            entity['contentContainerStyle'] = report;
            report = 'always';
            entity['keyboardShouldPersistTaps'] = report;
            options = _closure1_slot7;
            oscar = _closure1_slot0;
            sizing = _closure1_slot2;
            report = 16;
            report = sizing[report];
            report = oscar.bind(tango)(report);
            oscar = report.Text;
            report = {};
            golf = 'text-sm/semibold';
            report['variant'] = golf;
            report['children'] = verify;
            oscar = options.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            golf = _closure1_slot1;
            oscar = 17;
            oscar = sizing[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {'value': null, 'onChange': null, 'multiline': true, 'numberOfLines': 8, 'maxLength': null, 'autoFocus': true, 'autoCorrect': false, 'showBorder': false, 'showTopContainer': false, 'textAlignVertical': 'top', 'autoCapitalize': 'none'};
            oscar['value'] = backup;
            oscar['onChange'] = foxtrot;
            foxtrot = _closure1_slot6;
            oscar['maxLength'] = foxtrot;
            foxtrot = romeo.input;
            oscar['style'] = foxtrot;
            foxtrot = romeo.inputContainer;
            oscar['inputContainerStyle'] = foxtrot;
            romeo = romeo.text;
            oscar['inputTextStyle'] = romeo;
            backup = _closure1_slot0;
            yankee = _closure1_slot2;
            romeo = yankee[kilo];
            romeo = backup.bind(tango)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = yankee[kilo];
            yankee = backup.bind(tango)(yankee);
            yankee = yankee.t;
            if(offset) { _fun00002_ip = 584; continue _fun00001 }
 571:
            offset = yankee.tRZR6e;
            offset = romeo.bind(foxtrot)(offset);
            _fun00002_ip = 595; continue _fun00001;
 584:
            yankee = yankee.WLKx//;
            offset = romeo.bind(foxtrot)(yankee);
 595:
            oscar['placeholder'] = offset;
            oscar['accessibilityLabel'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();