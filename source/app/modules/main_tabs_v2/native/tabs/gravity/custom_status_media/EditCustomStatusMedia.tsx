// app/modules/main_tabs_v2/native/tabs/gravity/custom_status_media/EditCustomStatusMedia.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun117862: for(var _fun117862_ip = 0; ; ) switch(_fun117862_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun117862_ip = 46; continue _fun117862 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun117862_ip = 55; continue _fun117862 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun117862_ip = 345; continue _fun117862 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun117862_ip = 323; continue _fun117862 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun117862_ip = 283; continue _fun117862 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun117862_ip = 270; continue _fun117862 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun117862_ip = 163; continue _fun117862 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun117862_ip = 179; continue _fun117862 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun117862_ip = 249; continue _fun117862 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun117862_ip = 249; continue _fun117862 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun117862_ip = 234; continue _fun117862 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun117862_ip = 247; continue _fun117862 }
 234:
            verify = _closure1_slot25;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun117862_ip = 265; continue _fun117862;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun117862_ip = 283; continue _fun117862;
 270:
            golf = _closure1_slot25;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun117862_ip = 323; continue _fun117862 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun117862_ip = 330; continue _fun117862 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun117863: for(var _fun117863_ip = 0; ; ) switch(_fun117863_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun117863_ip = 56; continue _fun117863 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun117863_ip = 67; continue _fun117863;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun117864: for(var _fun117864_ip = 0; ; ) switch(_fun117864_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun117864_ip = 23; continue _fun117864 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun117864_ip = 33; continue _fun117864 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun117864_ip = 70; continue _fun117864 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun117864_ip = 55; continue _fun117864 }
 70:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: MediaPreview
        _fun117865: for(var _fun117865_ip = 0; ; ) switch(_fun117865_ip) {
 0:
            entity = argFoo;
            verify = entity.media;
            entity = _closure1_slot22;
            report = undefined;
            echo = entity.bind(report)();
            golf = verify.item;
            var _closure2_slot0 = golf;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 17;
            entity = tango[entity];
            oscar = zulu.bind(report)(entity);
            tango = oscar.useTileEntranceAnimatedStyle;
            zulu = golf.id;
            entity = null;
            if(!(entity == zulu)) { _fun117865_ip = 75; continue _fun117865 }
 70:
            zulu = golf.uri;
 75:
            backup = tango.bind(oscar)(zulu);
            oscar = _closure1_slot5;
            tango = oscar.useCallback;
            options = golf.id;
            zulu = new Array(2);
            zulu[0] = options;
            golf = golf.uri;
            zulu[1] = golf;
            mike = function() {
                _fun117866: for(var _fun117866_ip = 0; ; ) switch(_fun117866_ip) {
 0:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    entity = 18;
                    zulu = golf[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.remove;
                    tango = _closure1_slot0;
                    zulu = 19;
                    zulu = golf[zulu];
                    zulu = tango.bind(entity)(zulu);
                    tango = zulu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    options = null;
                    if(!(options == zulu)) { _fun117866_ip = 80; continue _fun117866 }
 71:
                    golf = _closure2_slot0;
                    zulu = golf.uri;
 80:
                    mike = _closure1_slot10;
                    mike = mike.ChannelMessage;
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                }
            };
            yankee = tango.bind(oscar)(mike, zulu);
            mike = verify.item;
            zulu = mike.platform;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 20;
            mike = oscar[mike];
            mike = tango.bind(report)(mike);
            mike = mike.UploadPlatform;
            mike = mike.REACT_NATIVE;
            entity = null;
            if(!(zulu === mike)) { _fun117865_ip = 639; continue _fun117865 }
 176:
            tango = _closure1_slot17;
            source = _closure1_slot1;
            control = _closure1_slot2;
            offset = 21;
            mike = control[offset];
            mike = source.bind(report)(mike);
            zulu = mike.View;
            mike = {};
            golf = echo.mediaPreview;
            oscar = new Array(2);
            oscar[0] = golf;
            oscar[1] = backup;
            mike['style'] = oscar;
            options = _closure1_slot16;
            oscar = 22;
            oscar = control[oscar];
            golf = source.bind(report)(oscar);
            oscar = {};
            romeo = verify.item;
            romeo = romeo.uri;
            oscar['uri'] = romeo;
            romeo = verify.isImage;
            oscar['isImage'] = romeo;
            romeo = verify.isVideo;
            oscar['isVideo'] = romeo;
            romeo = _closure1_slot19;
            oscar['width'] = romeo;
            romeo = _closure1_slot19;
            oscar['height'] = romeo;
            romeo = _closure1_slot19;
            oscar['maxFileWidth'] = romeo;
            verify = verify.item;
            verify = verify.filename;
            oscar['fileName'] = verify;
            golf = options.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            verify = _closure1_slot16;
            output = _closure1_slot0;
            golf = 23;
            golf = control[golf];
            golf = output.bind(report)(golf);
            options = golf.PressableOpacity;
            golf = {};
            romeo = 'button';
            golf['accessibilityRole'] = romeo;
            romeo = 24;
            foxtrot = control[romeo];
            foxtrot = output.bind(report)(foxtrot);
            kilo = foxtrot.intl;
            foxtrot = kilo.string;
            romeo = control[romeo];
            romeo = output.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.kFwAsb;
            romeo = foxtrot.bind(kilo)(romeo);
            golf['accessibilityLabel'] = romeo;
            romeo = echo.closeButton;
            golf['style'] = romeo;
            golf['onPress'] = yankee;
            yankee = {'top': 4, 'bottom': 4, 'left': 4, 'right': 4};
            golf['hitSlop'] = yankee;
            romeo = _closure1_slot16;
            offset = control[offset];
            offset = source.bind(report)(offset);
            yankee = offset.View;
            offset = {};
            kilo = echo.closeContainer;
            foxtrot = new Array(2);
            foxtrot[0] = kilo;
            foxtrot[1] = backup;
            offset['style'] = foxtrot;
            kilo = _closure1_slot16;
            backup = _closure1_slot6;
            foxtrot = {};
            result = echo.closeButtonSubcontainer;
            foxtrot['style'] = result;
            result = _closure1_slot16;
            sizing = 25;
            sizing = control[sizing];
            sizing = output.bind(report)(sizing);
            output = sizing.XSmallBoldIcon;
            sizing = {};
            update = 'xxs';
            sizing['size'] = update;
            update = 14;
            update = control[update];
            update = source.bind(report)(update);
            update = update.unsafe_rawColors;
            update = update.PRIMARY_500;
            sizing['color'] = update;
            echo = echo.closeButtonIcon;
            sizing['style'] = echo;
            sizing = result.bind(report)(output, sizing);
            foxtrot['children'] = sizing;
            foxtrot = kilo.bind(report)(backup, foxtrot);
            offset['children'] = foxtrot;
            offset = romeo.bind(report)(yankee, offset);
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 639:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: ActionBar
        _fun117867: for(var _fun117867_ip = 0; ; ) switch(_fun117867_ip) {
 0:
            zulu = argFoo;
            entity = zulu.media;
            var _closure2_slot0 = entity;
            options = zulu.actionBarHeight;
            var _closure2_slot1 = options;
            mike = zulu.onFormFocus;
            var _closure2_slot2 = mike;
            golf = zulu.onSubmit;
            var _closure2_slot3 = golf;
            sizing = zulu.submitButtonEnabled;
            zulu = _closure1_slot22;
            tango = undefined;
            config = zulu.bind(tango)();
            verify = _closure1_slot0;
            kilo = _closure1_slot2;
            zulu = 26;
            zulu = kilo[zulu];
            offset = verify.bind(tango)(zulu);
            oscar = offset.useStateFromStoresObject;
            zulu = _closure1_slot12;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                entity = {};
                zulu = _closure1_slot12;
                zulu = zulu.keyboardType;
                entity['keyboardType'] = zulu;
                mike = _closure1_slot12;
                mike = mike.expressionType;
                entity['expressionType'] = mike;
                return entity;
            };
            zulu = oscar.bind(offset)(report, zulu);
            offset = zulu.keyboardType;
            zulu = _closure1_slot13;
            zulu = zulu.MEDIA;
            result = offset === zulu;
            var _closure2_slot4 = result;
            oscar = _closure1_slot5;
            report = oscar.useCallback;
            zulu = new Array(2);
            zulu[0] = result;
            zulu[1] = mike;
            mike = function() {
                _fun117869: for(var _fun117869_ip = 0; ; ) switch(_fun117869_ip) {
 0:
                    mike = _closure2_slot4;
                    if(mike) { _fun117869_ip = 80; continue _fun117869 }
 10:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 27;
                    zulu = options[zulu];
                    oscar = undefined;
                    report = golf.bind(oscar)(zulu);
                    tango = report.showSimpleMediaKeyboard;
                    zulu = 19;
                    zulu = options[zulu];
                    zulu = golf.bind(oscar)(zulu);
                    zulu = zulu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
                    zulu = tango.bind(report)(zulu);
                    zulu = _closure1_slot7;
                    mike = zulu.dismiss;
                    mike = mike.bind(zulu)();
                    _fun117869_ip = 90; continue _fun117869;
 80:
                    mike = _closure2_slot2;
                    entity = undefined;
                    entity = mike.bind(entity)();
 90:
                    entity = undefined;
                    return entity;
                }
            };
            vacuum = report.bind(oscar)(mike, zulu);
            report = _closure1_slot5;
            zulu = report.useMemo;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                _fun117870: for(var _fun117870_ip = 0; ; ) switch(_fun117870_ip) {
 0:
                    entity = new Array(0);
                    zulu = _closure1_slot24;
                    mike = _closure2_slot0;
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = tango.bind(report)();
                    mike = zulu.done;
                    if(mike) { _fun117870_ip = 94; continue _fun117870 }
 37:
                    mike = zulu.value;
                    golf = entity.push;
                    offset = _closure1_slot16;
                    verify = _closure1_slot26;
                    options = {};
                    options['media'] = mike;
                    mike = mike.id;
                    mike = offset.bind(report)(verify, options, mike);
                    mike = golf.bind(entity)(mike);
                    golf = tango.bind(report)();
                    mike = golf.done;
                    zulu = golf;
                    if(!mike) { _fun117870_ip = 37; continue _fun117870 }
 94:
                    return entity;
                }
            };
            backup = zulu.bind(report)(entity, mike);
            report = 21;
            entity = kilo[report];
            zulu = verify.bind(tango)(entity);
            mike = zulu.useAnimatedStyle;
            entity = function() { // Original name: p
                entity = {};
                zulu = _closure1_slot20;
                entity['gap'] = zulu;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 28;
                zulu = zulu[mike];
                mike = undefined;
                report = tango.bind(mike)(zulu);
                tango = report.withSpring;
                zulu = _closure2_slot1;
                mike = {'stiffness': 150, 'overshootClamping': true};
                mike = tango.bind(report)(zulu, mike);
                entity['height'] = mike;
                return entity;
            };
            oscar = {};
            romeo = _closure1_slot20;
            oscar['ACTION_BAR_GAP'] = romeo;
            romeo = 28;
            romeo = kilo[romeo];
            romeo = verify.bind(tango)(romeo);
            romeo = romeo.withSpring;
            oscar['withSpring'] = romeo;
            oscar['actionBarHeight'] = options;
            entity['__closure'] = oscar;
            oscar = 5946282331087.0;
            entity['__workletHash'] = oscar;
            oscar = _closure1_slot23;
            entity['__initData'] = oscar;
            options = mike.bind(zulu)(entity);
            zulu = _closure1_slot5;
            mike = zulu.useState;
            entity = false;
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            entity = 0;
            echo = mike[entity];
            entity = 1;
            entity = mike[entity];
            var _closure2_slot5 = entity;
            oscar = _closure1_slot5;
            zulu = oscar.useCallback;
            mike = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun117873: for(var _fun117873_ip = 0; ; ) switch(_fun117873_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun117873_ip = 58; continue _fun117873 }
 7:
                        report = _closure2_slot5;
                        zulu = undefined;
                        mike = true;
                        mike = report.bind(zulu)(mike);
                        mike = _closure2_slot3;
                        mike = mike.bind(zulu)();
                        SaveGenerator(address=35);
 33:
                        return mike;
 35:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun117873_ip = 55; continue _fun117873 }
 41:
                        report = _closure2_slot5;
                        tango = false;
                        tango = report.bind(zulu)(tango);
                        return zulu;
 55:
                        return mike;
 58:
                        return entity;
                    }
                };
                return entity;
            };
            mike = mike.bind(tango)(entity);
            entity = new Array(1);
            entity[0] = golf;
            output = zulu.bind(oscar)(mike, entity);
            entity = 29;
            entity = kilo[entity];
            mike = verify.bind(tango)(entity);
            entity = mike.useCurrentKeyboardInfo;
            entity = entity.bind(mike)();
            romeo = entity.currentKeyboardHeight;
            zulu = _closure1_slot16;
            mike = _closure1_slot6;
            entity = {};
            golf = config.actionsContainer;
            oscar = new Array(2);
            oscar[0] = golf;
            golf = 30;
            golf = kilo[golf];
            verify = verify.bind(tango)(golf);
            golf = verify.isAndroid;
            golf = golf.bind(verify)();
            if(!golf) { _fun117867_ip = 479; continue _fun117867 }
 465:
            verify = _closure1_slot13;
            verify = verify.MEDIA;
            golf = offset === verify;
 479:
            if(!golf) { _fun117867_ip = 527; continue _fun117867 }
 482:
            verify = {};
            kilo = _closure1_slot1;
            update = _closure1_slot2;
            offset = 14;
            offset = update[offset];
            offset = kilo.bind(tango)(offset);
            offset = offset.spacing;
            offset = offset.PX_32;
            offset = romeo + offset;
            verify['paddingBottom'] = offset;
            golf = verify;
 527:
            oscar[1] = golf;
            entity['style'] = oscar;
            golf = _closure1_slot17;
            source = _closure1_slot1;
            sequence = _closure1_slot2;
            report = sequence[report];
            report = source.bind(tango)(report);
            oscar = report.View;
            report = {};
            report['style'] = options;
            offset = _closure1_slot16;
            verify = _closure1_slot8;
            options = {'keyboardShouldPersistTaps': 'always', 'horizontal': true};
            update = true;
            romeo = config.mediaItemsScrollContainer;
            options['contentContainerStyle'] = romeo;
            romeo = backup.map;
            yankee = function(argFoo) {
                entity = argFoo;
                return entity;
            };
            yankee = romeo.bind(backup)(yankee);
            options['children'] = yankee;
            verify = offset.bind(tango)(verify, options);
            options = new Array(2);
            options[0] = verify;
            yankee = _closure1_slot17;
            offset = _closure1_slot6;
            verify = {};
            romeo = config.actionButtonRow;
            verify['style'] = romeo;
            kilo = _closure1_slot16;
            papa = _closure1_slot0;
            romeo = 31;
            romeo = sequence[romeo];
            romeo = papa.bind(tango)(romeo);
            backup = romeo.HeaderActionButton;
            romeo = {};
            control = 24;
            record = sequence[control];
            record = papa.bind(tango)(record);
            context = record.intl;
            record = context.string;
            sequence = sequence[control];
            sequence = papa.bind(tango)(sequence);
            sequence = sequence.t;
            sequence = sequence.aDZSu7;
            sequence = record.bind(context)(sequence);
            romeo['accessibilityLabel'] = sequence;
            record = config.actionButton;
            sequence = new Array(2);
            sequence[0] = record;
            config = config.mediaButton;
            sequence[1] = config;
            romeo['style'] = sequence;
            config = _closure1_slot2;
            if(result) { _fun117867_ip = 780; continue _fun117867 }
 771:
            result = 33;
            result = config[result];
            _fun117867_ip = 787; continue _fun117867;
 780:
            sequence = 32;
            result = config[sequence];
 787:
            result = source.bind(tango)(result);
            romeo['source'] = result;
            source = _closure1_slot0;
            result = _closure1_slot2;
            sequence = 34;
            sequence = result[sequence];
            sequence = source.bind(tango)(sequence);
            sequence = sequence.IconSizes;
            sequence = sequence.SMALL_20;
            romeo['iconSize'] = sequence;
            romeo['onPress'] = vacuum;
            romeo['foregroundRipple'] = update;
            backup = kilo.bind(tango)(backup, romeo);
            romeo = new Array(2);
            romeo[0] = backup;
            kilo = _closure1_slot16;
            foxtrot = 35;
            foxtrot = result[foxtrot];
            foxtrot = source.bind(tango)(foxtrot);
            backup = foxtrot.Button;
            foxtrot = {};
            foxtrot['loading'] = echo;
            echo = result[control];
            echo = source.bind(tango)(echo);
            update = echo.intl;
            echo = update.string;
            result = result[control];
            result = source.bind(tango)(result);
            result = result.t;
            result = result.R3BPHx;
            result = echo.bind(update)(result);
            foxtrot['text'] = result;
            foxtrot['onPress'] = output;
            sizing = !sizing;
            foxtrot['disabled'] = sizing;
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            romeo[1] = foxtrot;
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot27 = entity;
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
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot6 = golf;
    backup = tango.StyleSheet;
    golf = tango.Keyboard;
    var _closure1_slot7 = golf;
    tango = tango.ScrollView;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DraftType;
    var _closure1_slot10 = tango;
    kilo = 6;
    tango = oscar[kilo];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot12 = tango;
    offset = 8;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    foxtrot = tango.ICYMI_MARGIN;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    output = tango.Fonts;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.STATUS_MAX_LENGTH;
    var _closure1_slot14 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EmojiIntention;
    var _closure1_slot15 = tango;
    tango = 13;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot16 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot17 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot18 = tango;
    tango = 48;
    var _closure1_slot19 = tango;
    yankee = 14;
    tango = oscar[yankee];
    tango = romeo.bind(entity)(tango);
    tango = tango.spacing;
    golf = tango.PX_4;
    var _closure1_slot20 = golf;
    tango = 40;
    tango = tango + golf;
    var _closure1_slot21 = tango;
    tango = 15;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    sizing = 16;
    verify = {'flexGrow': 1, 'padding': 16, 'rowGap': 32};
    tango['container'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'flex-start'};
    result = oscar[yankee];
    result = romeo.bind(entity)(result);
    result = result.colors;
    result = result.INPUT_BACKGROUND;
    verify['backgroundColor'] = result;
    result = oscar[yankee];
    result = romeo.bind(entity)(result);
    result = result.radii;
    result = result.lg;
    verify['borderRadius'] = result;
    verify['padding'] = foxtrot;
    tango['statusContainer'] = verify;
    verify = {'marginRight': 8, 'height': 32, 'width': 32};
    tango['emoji'] = verify;
    verify = {'color': null, 'lineHeight': 16, 'flexGrow': 1, 'alignSelf': 'flex-start', 'paddingVertical': 0, 'paddingHorizontal': 0};
    result = oscar[yankee];
    result = romeo.bind(entity)(result);
    result = result.colors;
    result = result.TEXT_PRIMARY;
    verify['color'] = result;
    tango['status'] = verify;
    verify = {'minHeight': 80, 'fontSize': 24, 'lineHeight': 30, 'fontFamily': null, 'color': null, 'flexGrow': 1, 'height': 'auto'};
    output = output.PRIMARY_MEDIUM;
    verify['fontFamily'] = output;
    output = oscar[yankee];
    output = romeo.bind(entity)(output);
    output = output.colors;
    output = output.TEXT_PRIMARY;
    verify['color'] = output;
    tango['statusText'] = verify;
    verify = {};
    output = oscar[yankee];
    output = romeo.bind(entity)(output);
    output = output.colors;
    output = output.TEXT_MUTED;
    verify['color'] = output;
    tango['inputPlaceholder'] = verify;
    verify = {};
    verify['rowGap'] = offset;
    tango['clearAfterSection'] = verify;
    verify = {};
    output = oscar[yankee];
    output = romeo.bind(entity)(output);
    output = output.colors;
    output = output.INPUT_BACKGROUND;
    verify['backgroundColor'] = output;
    output = oscar[yankee];
    output = romeo.bind(entity)(output);
    output = output.radii;
    output = output.lg;
    verify['borderRadius'] = output;
    output = 'hidden';
    verify['overflow'] = output;
    tango['clearAfterOptions'] = verify;
    verify = {'flex': 1, 'width': 48, 'height': 48, 'alignItems': 'center', 'justifyContent': 'center', 'borderColor': null, 'borderRadius': null, 'borderWidth': 1};
    output = oscar[yankee];
    output = romeo.bind(entity)(output);
    output = output.colors;
    output = output.BORDER_STRONG;
    verify['borderColor'] = output;
    output = oscar[yankee];
    output = romeo.bind(entity)(output);
    output = output.radii;
    output = output.md;
    verify['borderRadius'] = output;
    output = oscar[yankee];
    output = romeo.bind(entity)(output);
    output = output.colors;
    output = output.CARD_PRIMARY_BG;
    verify['backgroundColor'] = output;
    tango['mediaPreview'] = verify;
    verify = {'height': 20, 'width': 20, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'borderWidth': 1};
    output = oscar[yankee];
    output = romeo.bind(entity)(output);
    output = output.radii;
    output = output.round;
    verify['borderRadius'] = output;
    sizing = oscar[sizing];
    echo = report.bind(entity)(sizing);
    result = echo.hexWithOpacity;
    sizing = oscar[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    output = sizing.BLACK_500;
    sizing = 0.5;
    sizing = result.bind(echo)(output, sizing);
    verify['backgroundColor'] = sizing;
    tango['closeContainer'] = verify;
    verify = {'height': 18, 'width': 18, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    sizing = oscar[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    verify['borderRadius'] = sizing;
    sizing = oscar[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.INTERACTIVE_NORMAL;
    verify['backgroundColor'] = sizing;
    tango['closeButtonSubcontainer'] = verify;
    verify = {};
    sizing = oscar[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BG_BASE_PRIMARY;
    verify['tintColor'] = sizing;
    tango['closeButtonIcon'] = verify;
    verify = {'position': 'absolute', 'top': 4294967290, 'right': 4294967292};
    tango['closeButton'] = verify;
    verify = {};
    sizing = oscar[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    verify['columnGap'] = sizing;
    verify['paddingTop'] = kilo;
    verify['paddingHorizontal'] = foxtrot;
    tango['mediaItemsScrollContainer'] = verify;
    verify = {};
    backup = backup.hairlineWidth;
    verify['borderTopWidth'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BORDER_STRONG;
    verify['borderTopColor'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    verify['backgroundColor'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_12;
    verify['paddingBottom'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_8;
    verify['paddingTop'] = backup;
    tango['actionsContainer'] = verify;
    verify = {'flexDirection': 'row', 'marginHorizontal': null, 'justifyContent': 'space-between'};
    verify['marginHorizontal'] = foxtrot;
    tango['actionButtonRow'] = verify;
    verify = {'height': 40, 'minHeight': 40, 'width': 40, 'minWidth': 40, 'maxHeight': 40, 'maxWidth': 40};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.round;
    verify['borderRadius'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_NORMAL;
    verify['color'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.CARD_PRIMARY_BG;
    verify['backgroundColor'] = yankee;
    tango['actionButton'] = verify;
    verify = {};
    verify['marginRight'] = offset;
    tango['mediaButton'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot22 = tango;
    tango = {};
    golf = 'function EditCustomStatusMediaTsx1(){const{ACTION_BAR_GAP,withSpring,actionBarHeight}=this.__closure;return{gap:ACTION_BAR_GAP,height:withSpring(actionBarHeight,{stiffness:150,overshootClamping:true})};}';
    tango['code'] = golf;
    var _closure1_slot23 = tango;
    tango = 49;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/gravity/custom_status_media/EditCustomStatusMedia.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: EditCustomStatusMedia
        _fun117875: for(var _fun117875_ip = 0; ; ) switch(_fun117875_ip) {
 0:
            entity = argFoo;
            offset = entity.onClose;
            var _closure2_slot0 = offset;
            tango = undefined;
            var _closure2_slot9 = tango;
            entity = _closure1_slot22;
            target = entity.bind(tango)();
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 36;
            entity = verify[entity];
            entity = zulu.bind(tango)(entity);
            backup = entity.bind(tango)();
            mike = _closure1_slot0;
            report = 26;
            entity = verify[report];
            options = mike.bind(tango)(entity);
            golf = options.useStateFromStores;
            entity = _closure1_slot9;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot9;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            options = golf.bind(options)(mike, entity);
            var _closure2_slot1 = options;
            mike = _closure1_slot5;
            entity = mike.useState;
            golf = '';
            mike = entity.bind(mike)(golf);
            entity = _closure1_slot4;
            foxtrot = 2;
            entity = entity.bind(tango)(mike, foxtrot);
            mike = 0;
            sierra = entity[mike];
            var _closure2_slot2 = sierra;
            yankee = 1;
            status = entity[yankee];
            romeo = _closure1_slot5;
            entity = romeo.useState;
            context = null;
            romeo = entity.bind(romeo)(context);
            entity = _closure1_slot4;
            entity = entity.bind(tango)(romeo, foxtrot);
            papa = entity[mike];
            var _closure2_slot3 = papa;
            entity = entity[yankee];
            var _closure2_slot4 = entity;
            romeo = _closure1_slot5;
            entity = romeo.useState;
            romeo = entity.bind(romeo)(backup);
            entity = _closure1_slot4;
            entity = entity.bind(tango)(romeo, foxtrot);
            control = entity[mike];
            var _closure2_slot5 = control;
            entity = entity[yankee];
            var _closure2_slot6 = entity;
            foxtrot = _closure1_slot5;
            romeo = foxtrot.useCallback;
            yankee = function(argFoo) {
                _fun117877: for(var _fun117877_ip = 0; ; ) switch(_fun117877_ip) {
 0:
                    entity = argFoo;
                    zulu = _closure2_slot4;
                    mike = {};
                    tango = entity.id;
                    mike['id'] = tango;
                    report = entity.id;
                    tango = null;
                    if(!(tango == report)) { _fun117877_ip = 54; continue _fun117877 }
 32:
                    report = entity.surrogates;
                    if(!(tango != report)) { _fun117877_ip = 54; continue _fun117877 }
 41:
                    oscar = entity.surrogates;
                    report = '';
                    if(!(report === oscar)) { _fun117877_ip = 75; continue _fun117877 }
 54:
                    report = entity.name;
                    oscar = tango != report;
                    tango = '';
                    if(!oscar) { _fun117877_ip = 73; continue _fun117877 }
 70:
                    tango = report;
 73:
                    _fun117877_ip = 80; continue _fun117877;
 75:
                    tango = entity.surrogates;
 80:
                    mike['name'] = tango;
                    entity = entity.animated;
                    mike['animated'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            entity = new Array(0);
            entity = romeo.bind(foxtrot)(yankee, entity);
            var _closure2_slot7 = entity;
            foxtrot = _closure1_slot5;
            romeo = foxtrot.useCallback;
            yankee = new Array(1);
            yankee[0] = entity;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 37;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.openEmojiPickerActionSheet;
                mike = {};
                oscar = _closure2_slot7;
                mike['onPressEmoji'] = oscar;
                report = _closure1_slot15;
                report = report.STATUS;
                mike['pickerIntention'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            echo = romeo.bind(foxtrot)(entity, yankee);
            yankee = _closure1_slot5;
            entity = yankee.useRef;
            equality = entity.bind(yankee)(context);
            var _closure2_slot8 = equality;
            foxtrot = _closure1_slot5;
            romeo = foxtrot.useCallback;
            yankee = function() {
                _fun117879: for(var _fun117879_ip = 0; ; ) switch(_fun117879_ip) {
 0:
                    entity = _closure2_slot8;
                    mike = entity.current;
                    entity = null;
                    if(!(entity != mike)) { _fun117879_ip = 28; continue _fun117879 }
 18:
                    entity = mike.blur;
                    entity = entity.bind(mike)();
 28:
                    entity = undefined;
                    return entity;
                }
            };
            entity = new Array(0);
            lima = romeo.bind(foxtrot)(yankee, entity);
            entity = 38;
            entity = verify[entity];
            zulu = zulu.bind(tango)(entity);
            entity = function() {
                entity = {};
                zulu = _closure2_slot2;
                entity['statusText'] = zulu;
                zulu = _closure2_slot3;
                entity['statusEmoji'] = zulu;
                mike = _closure2_slot5;
                entity['clearAfter'] = mike;
                return entity;
            };
            zulu = zulu.bind(tango)(entity);
            entity = sierra.trim;
            entity = entity.bind(sierra)();
            verify = golf === entity;
            if(!verify) { _fun117875_ip = 385; continue _fun117875 }
 381:
            verify = context == papa;
 385:
            if(verify) { _fun117875_ip = 427; continue _fun117875 }
 388:
            entity = zulu.statusText;
            entity = sierra === entity;
            if(!entity) { _fun117875_ip = 411; continue _fun117875 }
 401:
            golf = zulu.statusEmoji;
            entity = papa === golf;
 411:
            if(!entity) { _fun117875_ip = 424; continue _fun117875 }
 414:
            zulu = zulu.clearAfter;
            entity = control === zulu;
 424:
            verify = entity;
 427:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            golf = zulu.bind(tango)(entity);
            report = golf.useStateFromStores;
            entity = _closure1_slot11;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                tango = _closure1_slot11;
                zulu = tango.getUploads;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                mike = 19;
                report = report[mike];
                mike = undefined;
                mike = oscar.bind(mike)(report);
                mike = mike.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                entity = _closure1_slot10;
                entity = entity.ChannelMessage;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            foxtrot = report.bind(golf)(zulu, entity);
            _closure2_slot9 = foxtrot;
            golf = _closure1_slot5;
            report = golf.useCallback;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun117883: for(var _fun117883_ip = 0; ; ) switch(_fun117883_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun117883_ip = 326; continue _fun117883 }
 10:
                        zulu = _closure1_slot0;
                        report = _closure1_slot2;
                        mike = 39;
                        mike = report[mike];
                        tango = undefined;
                        options = zulu.bind(tango)(mike);
                        golf = options.trackItemInteraction;
                        zulu = 'edit_custom_status_modal';
                        mike = 'press_save_new_custom_status';
                        mike = golf.bind(options)(zulu, zulu, mike);
                        zulu = _closure1_slot1;
                        mike = 40;
                        mike = report[mike];
                        mike = zulu.bind(tango)(mike);
                        zulu = mike.bind(tango)();
                        mike = zulu.toDate;
                        zulu = mike.bind(zulu)();
                        mike = zulu.getTime;
                        offset = mike.bind(zulu)();
                        mike = _closure2_slot9;
                        zulu = mike.length;
                        mike = 0;
                        if(!(zulu > mike)) { _fun117883_ip = 172; continue _fun117883 }
 118:
                        zulu = _closure1_slot0;
                        golf = _closure1_slot2;
                        mike = 41;
                        mike = golf[mike];
                        options = zulu.bind(tango)(mike);
                        golf = options.handleUploadingMedia;
                        zulu = _closure2_slot9;
                        mike = _closure2_slot1;
                        mike = golf.bind(options)(zulu, mike, offset);
                        SaveGenerator(address=163);
 161:
                        return mike;
 163:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun117883_ip = 323; continue _fun117883 }
 172:
                        golf = _closure1_slot1;
                        options = _closure1_slot2;
                        zulu = 42;
                        zulu = options[zulu];
                        verify = golf.bind(tango)(zulu);
                        output = _closure2_slot2;
                        sizing = _closure2_slot3;
                        kilo = _closure2_slot5;
                        result = undefined;
                        backup = undefined;
                        foxtrot = offset;
                        zulu = result[verify](output, sizing, kilo, backup, foxtrot, romeo);
                        SaveGenerator(address=219);
 217:
                        return zulu;
 219:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(golf) { _fun117883_ip = 320; continue _fun117883 }
 225:
                        yankee = _closure1_slot0;
                        romeo = _closure1_slot2;
                        oscar = 43;
                        oscar = romeo[oscar];
                        oscar = yankee.bind(tango)(oscar);
                        options = oscar.AccessibilityAnnouncer;
                        golf = options.announce;
                        oscar = 24;
                        verify = romeo[oscar];
                        verify = yankee.bind(tango)(verify);
                        offset = verify.intl;
                        verify = offset.string;
                        oscar = romeo[oscar];
                        oscar = yankee.bind(tango)(oscar);
                        oscar = oscar.t;
                        oscar = oscar.Og40Ym;
                        oscar = verify.bind(offset)(oscar);
                        oscar = golf.bind(options)(oscar);
                        report = _closure2_slot0;
                        report = report.bind(tango)();
                        return tango;
 320:
                        return zulu;
 323:
                        return mike;
 326:
                        return entity;
                    }
                };
                return entity;
            };
            zulu = zulu.bind(tango)(entity);
            entity = new Array(6);
            entity[0] = sierra;
            entity[1] = papa;
            entity[2] = control;
            entity[3] = foxtrot;
            entity[4] = offset;
            entity[5] = options;
            offset = report.bind(golf)(zulu, entity);
            golf = _closure1_slot5;
            report = golf.useCallback;
            zulu = function() {
                _fun117884: for(var _fun117884_ip = 0; ; ) switch(_fun117884_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 44;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hideMediaKeyboardActionSheet;
                    mike = mike.bind(zulu)();
                    mike = _closure2_slot8;
                    zulu = mike.current;
                    mike = null;
                    if(!(mike != zulu)) { _fun117884_ip = 63; continue _fun117884 }
 53:
                    mike = zulu.focus;
                    mike = mike.bind(zulu)();
 63:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 45;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.toggleKeyboard;
                    mike = {};
                    report = _closure1_slot13;
                    report = report.SYSTEM;
                    mike['keyboardType'] = report;
                    report = true;
                    mike['keyboardWillOpen'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = new Array(0);
            yankee = report.bind(golf)(zulu, entity);
            entity = foxtrot.length;
            if(!(!(entity > mike))) { _fun117875_ip = 578; continue _fun117875 }
 572:
            romeo = _closure1_slot21;
            _fun117875_ip = 597; continue _fun117875;
 578:
            mike = _closure1_slot20;
            entity = 54;
            mike = entity + mike;
            entity = _closure1_slot21;
            romeo = mike + entity;
 597:
            report = _closure1_slot5;
            zulu = report.useEffect;
            mike = function() {
                entity = function() {
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    entity = 18;
                    zulu = golf[entity];
                    entity = undefined;
                    report = tango.bind(entity)(zulu);
                    tango = report.clearAll;
                    oscar = _closure1_slot0;
                    zulu = 19;
                    zulu = golf[zulu];
                    zulu = oscar.bind(entity)(zulu);
                    zulu = zulu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    mike = _closure1_slot10;
                    mike = mike.ChannelMessage;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                return entity;
            };
            entity = new Array(0);
            entity = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot17;
            mike = _closure1_slot18;
            entity = {};
            options = _closure1_slot16;
            golf = _closure1_slot8;
            report = {};
            backup = {};
            sizing = _closure1_slot1;
            vacuum = _closure1_slot2;
            kilo = 14;
            kilo = vacuum[kilo];
            kilo = sizing.bind(tango)(kilo);
            kilo = kilo.spacing;
            kilo = kilo.PX_16;
            kilo = romeo + kilo;
            backup['bottom'] = kilo;
            report['contentInset'] = backup;
            backup = 'always';
            report['keyboardShouldPersistTaps'] = backup;
            sizing = _closure1_slot17;
            kilo = _closure1_slot6;
            backup = {};
            output = target.container;
            backup['style'] = output;
            update = _closure1_slot17;
            result = _closure1_slot6;
            output = {};
            sequence = target.statusContainer;
            output['style'] = sequence;
            record = _closure1_slot16;
            variable37 = _closure1_slot0;
            sequence = 23;
            sequence = vacuum[sequence];
            sequence = variable37.bind(tango)(sequence);
            config = sequence.PressableOpacity;
            sequence = {};
            whiskey = 24;
            quebec = vacuum[whiskey];
            quebec = variable37.bind(tango)(quebec);
            variable36 = quebec.intl;
            quebec = variable36.string;
            vacuum = vacuum[whiskey];
            vacuum = variable37.bind(tango)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.WkfRZG;
            vacuum = quebec.bind(variable36)(vacuum);
            sequence['accessibilityLabel'] = vacuum;
            vacuum = {};
            quebec = context == papa;
            context = undefined;
            if(quebec) { _fun117875_ip = 834; continue _fun117875 }
 829:
            context = papa.name;
 834:
            vacuum['text'] = context;
            sequence['accessibilityValue'] = vacuum;
            vacuum = 'button';
            sequence['accessibilityRole'] = vacuum;
            sequence['onPress'] = echo;
            variable36 = _closure1_slot16;
            echo = _closure1_slot1;
            vacuum = _closure1_slot2;
            context = 46;
            context = vacuum[context];
            quebec = echo.bind(tango)(context);
            context = {};
            context['emoji'] = papa;
            papa = target.emoji;
            context['style'] = papa;
            papa = true;
            context['withPlaceholder'] = papa;
            context = variable36.bind(tango)(quebec, context);
            sequence['children'] = context;
            config = record.bind(tango)(config, sequence);
            sequence = new Array(2);
            sequence[0] = config;
            context = _closure1_slot16;
            config = 47;
            config = vacuum[config];
            record = echo.bind(tango)(config);
            config = {};
            config['ref'] = equality;
            equality = _closure1_slot14;
            config['maxLength'] = equality;
            variable36 = _closure1_slot0;
            equality = vacuum[whiskey];
            equality = variable36.bind(tango)(equality);
            variable37 = equality.intl;
            quebec = variable37.string;
            equality = vacuum[whiskey];
            equality = variable36.bind(tango)(equality);
            equality = equality.t;
            equality = equality.TM2l8P;
            equality = quebec.bind(variable37)(equality);
            config['placeholder'] = equality;
            equality = target.inputPlaceholder;
            equality = equality.color;
            config['placeholderTextColor'] = equality;
            equality = vacuum[whiskey];
            equality = variable36.bind(tango)(equality);
            quebec = equality.intl;
            equality = quebec.string;
            whiskey = vacuum[whiskey];
            whiskey = variable36.bind(tango)(whiskey);
            whiskey = whiskey.t;
            whiskey = whiskey.xalUlZ;
            whiskey = equality.bind(quebec)(whiskey);
            config['accessibilityLabel'] = whiskey;
            config['onSubmitEditing'] = lima;
            lima = target.status;
            config['style'] = lima;
            config['value'] = sierra;
            config['onChange'] = status;
            config['onFocus'] = yankee;
            config['multiline'] = papa;
            status = false;
            config['autoCorrect'] = status;
            config['showBorder'] = status;
            config['showTopContainer'] = status;
            status = 'top';
            config['textAlignVertical'] = status;
            status = 'none';
            config['autoCapitalize'] = status;
            config['showCharactersRemaining'] = papa;
            target = target.statusText;
            config['inputTextStyle'] = target;
            config['autoFocus'] = papa;
            config = context.bind(tango)(record, config);
            sequence[1] = config;
            output['children'] = sequence;
            result = update.bind(tango)(result, output);
            output = new Array(2);
            output[0] = result;
            update = _closure1_slot16;
            result = 48;
            result = vacuum[result];
            echo = echo.bind(tango)(result);
            result = {};
            result['value'] = control;
            source = function(argFoo) { // Original name: onChange
                zulu = _closure2_slot6;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            result['onChange'] = source;
            result = update.bind(tango)(echo, result);
            output[1] = result;
            backup['children'] = output;
            backup = sizing.bind(tango)(kilo, backup);
            report['children'] = backup;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot16;
            golf = _closure1_slot27;
            oscar = {};
            oscar['media'] = foxtrot;
            oscar['actionBarHeight'] = romeo;
            oscar['onFormFocus'] = yankee;
            oscar['onSubmit'] = offset;
            verify = !verify;
            oscar['submitButtonEnabled'] = verify;
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