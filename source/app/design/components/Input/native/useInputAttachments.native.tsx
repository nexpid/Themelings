// app/design/components/Input/native/useInputAttachments.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    oscar = function(argFoo, argBar) { // Original name: estimateAttachmentWidth
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = null;
            entity = argFoo;
            mike = mike != entity;
            entity = 0;
            if(!mike) { _fun00002_ip = 60; continue _fun00001 }
 14:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 4;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            zulu = zulu.ICON_SIZE;
            mike = _closure1_slot7;
            zulu = zulu[mike];
            mike = argBar;
            entity = zulu + mike;
 60:
            return entity;
        }
    };
    var _closure1_slot8 = oscar;
    report = function(argFoo, argBar, argBaz) { // Original name: renderInputAttachment
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            golf = argBar;
            entity = null;
            if(!(entity == report)) { _fun00004_ip = 86; continue _fun00003 }
 12:
            mike = entity != golf;
            entity = null;
            if(!mike) { _fun00004_ip = 84; continue _fun00003 }
 21:
            oscar = _closure1_slot6;
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 5;
            mike = tango[mike];
            tango = undefined;
            mike = zulu.bind(tango)(mike);
            zulu = mike.Text;
            mike = {};
            options = 'text-md/normal';
            mike['variant'] = options;
            options = argBaz;
            mike['style'] = options;
            mike['children'] = golf;
            entity = oscar.bind(tango)(zulu, mike);
 84:
            _fun00004_ip = 121; continue _fun00003;
 86:
            tango = _closure1_slot6;
            zulu = {};
            mike = _closure1_slot7;
            zulu['size'] = mike;
            mike = 'text-normal';
            zulu['color'] = mike;
            mike = undefined;
            entity = tango.bind(mike)(report, zulu);
 121:
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tango = function(argFoo) { // Original name: InputAttachmentContainer
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golf = entity.content;
            mike = entity.style;
            var _closure2_slot0 = mike;
            tango = entity.setWidth;
            var _closure2_slot1 = tango;
            options = entity.pressableProps;
            tango = null;
            report = tango == golf;
            entity = null;
            if(report) { _fun00006_ip = 174; continue _fun00005 }
 49:
            if(!(tango == options)) { _fun00006_ip = 94; continue _fun00005 }
 53:
            oscar = _closure1_slot6;
            report = _closure1_slot5;
            tango = {};
            tango['style'] = mike;
            mike = function(argFoo) { // Original name: onLayout
                zulu = _closure2_slot1;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                mike = entity.width;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            tango['onLayout'] = mike;
            tango['children'] = golf;
            mike = undefined;
            mike = oscar.bind(mike)(report, tango);
            _fun00006_ip = 171; continue _fun00005;
 94:
            oscar = _closure1_slot6;
            report = _closure1_slot4;
            tango = {};
            verify = 'button';
            tango['role'] = verify;
            yankee = tango;
            offset = options;
            options = copyDataProperties(yankee, offset);
            verify = function(argFoo) { // Original name: style
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.pressed;
                    mike = _closure2_slot0;
                    entity = new Array(3);
                    entity[0] = mike;
                    mike = {};
                    tango = 'auto';
                    mike['pointerEvents'] = tango;
                    entity[1] = mike;
                    mike = undefined;
                    if(!zulu) { _fun00008_ip = 63; continue _fun00007 }
 44:
                    zulu = {};
                    tango = 0.2;
                    zulu['opacity'] = tango;
                    mike = zulu;
 63:
                    entity[2] = mike;
                    return entity;
                }
            };
            options = 'style';
            tango[options] = verify;
            options = function(argFoo) { // Original name: onLayout
                zulu = _closure2_slot1;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                mike = entity.width;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            zulu = 'onLayout';
            tango[zulu] = options;
            zulu = 'children';
            tango[zulu] = golf;
            zulu = undefined;
            mike = oscar.bind(zulu)(report, tango);
 171:
            entity = mike;
 174:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, golf);
    entity = 0;
    offset = verify[entity];
    golf = argBaz;
    entity = undefined;
    golf = golf.bind(entity)(offset);
    var _closure1_slot2 = golf;
    golf = 1;
    offset = verify[golf];
    golf = argCorge;
    golf = golf.bind(entity)(offset);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.Platform;
    offset = golf.Pressable;
    var _closure1_slot4 = offset;
    golf = golf.View;
    var _closure1_slot5 = golf;
    golf = 3;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    golf = 'xs';
    var _closure1_slot7 = golf;
    golf = 7;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'design/components/Input/native/useInputAttachments.native.tsx';
    golf = options.bind(verify)(golf);
    zulu['estimateAttachmentWidth'] = oscar;
    zulu['renderInputAttachment'] = report;
    zulu['InputAttachmentContainer'] = tango;
    mike = function(argFoo, argBar) { // Original name: useInputAttachments
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golf = argFoo;
            backup = argBar;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 6;
            tango = tango[zulu];
            zulu = undefined;
            oscar = report.bind(zulu)(tango);
            report = oscar.useInputStyles;
            tango = {};
            options = golf.size;
            tango['size'] = options;
            options = golf.leadingIcon;
            foxtrot = null;
            options = foxtrot != options;
            tango['hasLeadingIcon'] = options;
            tango = report.bind(oscar)(tango);
            var _closure2_slot0 = tango;
            oscar = golf.leadingIcon;
            var _closure2_slot1 = oscar;
            offset = golf.leadingText;
            result = golf.leadingPressableProps;
            report = golf.trailingIcon;
            var _closure2_slot2 = report;
            verify = golf.trailingText;
            yankee = golf.trailingPressableProps;
            golf = foxtrot == backup;
            update = undefined;
            if(golf) { _fun00010_ip = 135; continue _fun00009 }
 129:
            update = backup.leading;
 135:
            if(!(foxtrot == update)) { _fun00010_ip = 155; continue _fun00009 }
 139:
            options = _closure1_slot9;
            golf = tango.text;
            update = options.bind(zulu)(oscar, offset, golf);
 155:
            golf = foxtrot == backup;
            kilo = undefined;
            if(golf) { _fun00010_ip = 170; continue _fun00009 }
 164:
            kilo = backup.trailing;
 170:
            if(!(foxtrot == kilo)) { _fun00010_ip = 190; continue _fun00009 }
 174:
            options = _closure1_slot9;
            golf = tango.text;
            kilo = options.bind(zulu)(report, verify, golf);
 190:
            if(!(foxtrot == oscar)) { _fun00010_ip = 213; continue _fun00009 }
 194:
            golf = foxtrot == backup;
            oscar = undefined;
            if(golf) { _fun00010_ip = 209; continue _fun00009 }
 203:
            oscar = backup.leading;
 209:
            if(!(foxtrot != oscar)) { _fun00010_ip = 221; continue _fun00009 }
 213:
            output = tango.leadingIcon;
            _fun00010_ip = 227; continue _fun00009;
 221:
            output = tango.leadingText;
 227:
            if(!(foxtrot == report)) { _fun00010_ip = 250; continue _fun00009 }
 231:
            oscar = foxtrot == backup;
            report = undefined;
            if(oscar) { _fun00010_ip = 246; continue _fun00009 }
 240:
            report = backup.trailing;
 246:
            if(!(foxtrot != report)) { _fun00010_ip = 258; continue _fun00009 }
 250:
            offset = tango.trailingIcon;
            _fun00010_ip = 264; continue _fun00009;
 258:
            offset = tango.trailingText;
 264:
            sizing = _closure1_slot3;
            oscar = sizing.useState;
            report = function() {
                tango = _closure1_slot8;
                zulu = _closure2_slot1;
                entity = _closure2_slot0;
                mike = entity.leadingIcon;
                mike = mike.paddingStart;
                entity = entity.leadingIcon;
                entity = entity.paddingEnd;
                mike = mike + entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            oscar = oscar.bind(sizing)(report);
            options = _closure1_slot2;
            report = 2;
            romeo = options.bind(zulu)(oscar, report);
            oscar = 0;
            verify = romeo[oscar];
            golf = 1;
            echo = romeo[golf];
            romeo = sizing.useState;
            entity = function() {
                tango = _closure1_slot8;
                zulu = _closure2_slot2;
                entity = _closure2_slot0;
                mike = entity.trailingIcon;
                mike = mike.paddingStart;
                entity = entity.trailingIcon;
                entity = entity.paddingEnd;
                mike = mike + entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity = romeo.bind(sizing)(entity);
            entity = options.bind(zulu)(entity, report);
            report = entity[oscar];
            romeo = entity[golf];
            entity = {};
            sizing = _closure1_slot6;
            options = _closure1_slot10;
            golf = {};
            golf['content'] = update;
            golf['setWidth'] = echo;
            update = foxtrot == backup;
            echo = undefined;
            if(update) { _fun00010_ip = 374; continue _fun00009 }
 368:
            echo = backup.leadingPressableProps;
 374:
            if(!(foxtrot != echo)) { _fun00010_ip = 381; continue _fun00009 }
 378:
            result = echo;
 381:
            golf['pressableProps'] = result;
            golf['style'] = output;
            golf = sizing.bind(zulu)(options, golf);
            entity['leading'] = golf;
            options = _closure1_slot6;
            golf = _closure1_slot10;
            mike = {};
            mike['content'] = kilo;
            mike['setWidth'] = romeo;
            kilo = foxtrot == backup;
            romeo = undefined;
            if(kilo) { _fun00010_ip = 435; continue _fun00009 }
 429:
            romeo = backup.trailingPressableProps;
 435:
            if(!(foxtrot != romeo)) { _fun00010_ip = 442; continue _fun00009 }
 439:
            yankee = romeo;
 442:
            mike['pressableProps'] = yankee;
            mike['style'] = offset;
            mike = options.bind(zulu)(golf, mike);
            entity['trailing'] = mike;
            mike = {};
            golf = undefined;
            if(!(oscar !== verify)) { _fun00010_ip = 484; continue _fun00009 }
 470:
            options = tango.padding;
            options = options.paddingHorizontal;
            golf = verify - options;
 484:
            mike['marginStart'] = golf;
            zulu = undefined;
            if(!(oscar !== report)) { _fun00010_ip = 509; continue _fun00009 }
 495:
            tango = tango.padding;
            tango = tango.paddingHorizontal;
            zulu = report - tango;
 509:
            mike['marginEnd'] = zulu;
            entity['inputStyle'] = mike;
            return entity;
        }
    };
    zulu['useInputAttachments'] = mike;
    return entity;
})();