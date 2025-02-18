// app/design/components/Input/native/useInputAttachments.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    oscard = function(argFoo, argBar) { // Original name: estimateAttachmentWidth
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = null;
            entity = argFoo;
            michal = michal != entity;
            entity = 0;
            if(!michal) { _fun00002_ip = 60; continue _fun00001 }
 14:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 4;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.ICON_SIZE;
            michal = _closure1_slot7;
            zuuluu = zuuluu[michal];
            michal = argBar;
            entity = zuuluu + michal;
 60:
            return entity;
        }
    };
    var _closure1_slot8 = oscard;
    report = function(argFoo, argBar, argBaz) { // Original name: renderInputAttachment
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            golfie = argBar;
            entity = null;
            if(!(entity == report)) { _fun00004_ip = 86; continue _fun00003 }
 12:
            michal = entity != golfie;
            entity = null;
            if(!michal) { _fun00004_ip = 84; continue _fun00003 }
 21:
            oscard = _closure1_slot6;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 5;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.Text;
            michal = {};
            option = 'text-md/normal';
            michal['variant'] = option;
            option = argBaz;
            michal['style'] = option;
            michal['children'] = golfie;
            entity = oscard.bind(tangon)(zuuluu, michal);
 84:
            _fun00004_ip = 121; continue _fun00003;
 86:
            tangon = _closure1_slot6;
            zuuluu = {};
            michal = _closure1_slot7;
            zuuluu['size'] = michal;
            michal = 'text-normal';
            zuuluu['color'] = michal;
            michal = undefined;
            entity = tangon.bind(michal)(report, zuuluu);
 121:
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tangon = function(argFoo) { // Original name: InputAttachmentContainer
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golfie = entity.content;
            michal = entity.style;
            var _closure2_slot0 = michal;
            tangon = entity.setWidth;
            var _closure2_slot1 = tangon;
            option = entity.pressableProps;
            tangon = null;
            report = tangon == golfie;
            entity = null;
            if(report) { _fun00006_ip = 174; continue _fun00005 }
 49:
            if(!(tangon == option)) { _fun00006_ip = 94; continue _fun00005 }
 53:
            oscard = _closure1_slot6;
            report = _closure1_slot5;
            tangon = {};
            tangon['style'] = michal;
            michal = function(argFoo) { // Original name: onLayout
                zuuluu = _closure2_slot1;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                michal = entity.width;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            tangon['onLayout'] = michal;
            tangon['children'] = golfie;
            michal = undefined;
            michal = oscard.bind(michal)(report, tangon);
            _fun00006_ip = 171; continue _fun00005;
 94:
            oscard = _closure1_slot6;
            report = _closure1_slot4;
            tangon = {};
            verify = 'button';
            tangon['role'] = verify;
            yankee = tangon;
            offset = option;
            option = copyDataProperties(yankee, offset);
            verify = function(argFoo) { // Original name: style
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.pressed;
                    michal = _closure2_slot0;
                    entity = new Array(3);
                    entity[0] = michal;
                    michal = {};
                    tangon = 'auto';
                    michal['pointerEvents'] = tangon;
                    entity[1] = michal;
                    michal = undefined;
                    if(!zuuluu) { _fun00008_ip = 63; continue _fun00007 }
 44:
                    zuuluu = {};
                    tangon = 0.2;
                    zuuluu['opacity'] = tangon;
                    michal = zuuluu;
 63:
                    entity[2] = michal;
                    return entity;
                }
            };
            option = 'style';
            tangon[option] = verify;
            option = function(argFoo) { // Original name: onLayout
                zuuluu = _closure2_slot1;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                michal = entity.width;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = 'onLayout';
            tangon[zuuluu] = option;
            zuuluu = 'children';
            tangon[zuuluu] = golfie;
            zuuluu = undefined;
            michal = oscard.bind(zuuluu)(report, tangon);
 171:
            entity = michal;
 174:
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, golfie);
    entity = 0;
    offset = verify[entity];
    golfie = argBaz;
    entity = undefined;
    golfie = golfie.bind(entity)(offset);
    var _closure1_slot2 = golfie;
    golfie = 1;
    offset = verify[golfie];
    golfie = argCor;
    golfie = golfie.bind(entity)(offset);
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.Platform;
    offset = golfie.Pressable;
    var _closure1_slot4 = offset;
    golfie = golfie.View;
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot6 = golfie;
    golfie = 'xs';
    var _closure1_slot7 = golfie;
    golfie = 7;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'design/components/Input/native/useInputAttachments.native.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['estimateAttachmentWidth'] = oscard;
    zuuluu['renderInputAttachment'] = report;
    zuuluu['InputAttachmentContainer'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useInputAttachments
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            backup = argBar;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 6;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.useInputStyles;
            tangon = {};
            option = golfie.size;
            tangon['size'] = option;
            option = golfie.leadingIcon;
            foxtra = null;
            option = foxtra != option;
            tangon['hasLeadingIcon'] = option;
            tangon = report.bind(oscard)(tangon);
            var _closure2_slot0 = tangon;
            oscard = golfie.leadingIcon;
            var _closure2_slot1 = oscard;
            offset = golfie.leadingText;
            result = golfie.leadingPressableProps;
            report = golfie.trailingIcon;
            var _closure2_slot2 = report;
            verify = golfie.trailingText;
            yankee = golfie.trailingPressableProps;
            golfie = foxtra == backup;
            update = undefined;
            if(golfie) { _fun00010_ip = 135; continue _fun00009 }
 129:
            update = backup.leading;
 135:
            if(!(foxtra == update)) { _fun00010_ip = 155; continue _fun00009 }
 139:
            option = _closure1_slot9;
            golfie = tangon.text;
            update = option.bind(zuuluu)(oscard, offset, golfie);
 155:
            golfie = foxtra == backup;
            kiloes = undefined;
            if(golfie) { _fun00010_ip = 170; continue _fun00009 }
 164:
            kiloes = backup.trailing;
 170:
            if(!(foxtra == kiloes)) { _fun00010_ip = 190; continue _fun00009 }
 174:
            option = _closure1_slot9;
            golfie = tangon.text;
            kiloes = option.bind(zuuluu)(report, verify, golfie);
 190:
            if(!(foxtra == oscard)) { _fun00010_ip = 213; continue _fun00009 }
 194:
            golfie = foxtra == backup;
            oscard = undefined;
            if(golfie) { _fun00010_ip = 209; continue _fun00009 }
 203:
            oscard = backup.leading;
 209:
            if(!(foxtra != oscard)) { _fun00010_ip = 221; continue _fun00009 }
 213:
            output = tangon.leadingIcon;
            _fun00010_ip = 227; continue _fun00009;
 221:
            output = tangon.leadingText;
 227:
            if(!(foxtra == report)) { _fun00010_ip = 250; continue _fun00009 }
 231:
            oscard = foxtra == backup;
            report = undefined;
            if(oscard) { _fun00010_ip = 246; continue _fun00009 }
 240:
            report = backup.trailing;
 246:
            if(!(foxtra != report)) { _fun00010_ip = 258; continue _fun00009 }
 250:
            offset = tangon.trailingIcon;
            _fun00010_ip = 264; continue _fun00009;
 258:
            offset = tangon.trailingText;
 264:
            sizing = _closure1_slot3;
            oscard = sizing.useState;
            report = function() {
                tangon = _closure1_slot8;
                zuuluu = _closure2_slot1;
                entity = _closure2_slot0;
                michal = entity.leadingIcon;
                michal = michal.paddingStart;
                entity = entity.leadingIcon;
                entity = entity.paddingEnd;
                michal = michal + entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            oscard = oscard.bind(sizing)(report);
            option = _closure1_slot2;
            report = 2;
            romeon = option.bind(zuuluu)(oscard, report);
            oscard = 0;
            verify = romeon[oscard];
            golfie = 1;
            echoed = romeon[golfie];
            romeon = sizing.useState;
            entity = function() {
                tangon = _closure1_slot8;
                zuuluu = _closure2_slot2;
                entity = _closure2_slot0;
                michal = entity.trailingIcon;
                michal = michal.paddingStart;
                entity = entity.trailingIcon;
                entity = entity.paddingEnd;
                michal = michal + entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            entity = romeon.bind(sizing)(entity);
            entity = option.bind(zuuluu)(entity, report);
            report = entity[oscard];
            romeon = entity[golfie];
            entity = {};
            sizing = _closure1_slot6;
            option = _closure1_slot10;
            golfie = {};
            golfie['content'] = update;
            golfie['setWidth'] = echoed;
            update = foxtra == backup;
            echoed = undefined;
            if(update) { _fun00010_ip = 374; continue _fun00009 }
 368:
            echoed = backup.leadingPressableProps;
 374:
            if(!(foxtra != echoed)) { _fun00010_ip = 381; continue _fun00009 }
 378:
            result = echoed;
 381:
            golfie['pressableProps'] = result;
            golfie['style'] = output;
            golfie = sizing.bind(zuuluu)(option, golfie);
            entity['leading'] = golfie;
            option = _closure1_slot6;
            golfie = _closure1_slot10;
            michal = {};
            michal['content'] = kiloes;
            michal['setWidth'] = romeon;
            kiloes = foxtra == backup;
            romeon = undefined;
            if(kiloes) { _fun00010_ip = 435; continue _fun00009 }
 429:
            romeon = backup.trailingPressableProps;
 435:
            if(!(foxtra != romeon)) { _fun00010_ip = 442; continue _fun00009 }
 439:
            yankee = romeon;
 442:
            michal['pressableProps'] = yankee;
            michal['style'] = offset;
            michal = option.bind(zuuluu)(golfie, michal);
            entity['trailing'] = michal;
            michal = {};
            golfie = undefined;
            if(!(oscard !== verify)) { _fun00010_ip = 484; continue _fun00009 }
 470:
            option = tangon.padding;
            option = option.paddingHorizontal;
            golfie = verify - option;
 484:
            michal['marginStart'] = golfie;
            zuuluu = undefined;
            if(!(oscard !== report)) { _fun00010_ip = 509; continue _fun00009 }
 495:
            tangon = tangon.padding;
            tangon = tangon.paddingHorizontal;
            zuuluu = report - tangon;
 509:
            michal['marginEnd'] = zuuluu;
            entity['inputStyle'] = michal;
            return entity;
        }
    };
    zuuluu['useInputAttachments'] = michal;
    return entity;
})();