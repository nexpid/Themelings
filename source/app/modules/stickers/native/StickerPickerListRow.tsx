// app/modules/stickers/native/StickerPickerListRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StickerAnimationSettings;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    yankee = tangon.ROW_HEIGHT;
    offset = tangon.STICKER_SIZE;
    var _closure1_slot7 = offset;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PADDING_VERTICAL;
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'height': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'overflow': 'hidden'};
    verify['height'] = yankee;
    tangon['row'] = verify;
    verify = {};
    verify['height'] = offset;
    verify['width'] = offset;
    tangon['stickerImage'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stickers/native/StickerPickerListRow.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: StickerPickerListRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.containerWidth;
            sizing = entity.stickers;
            var _closure2_slot0 = sizing;
            kiloes = entity.rowSize;
            michal = entity.onPressSticker;
            var _closure2_slot1 = michal;
            michal = entity.focusedSticker;
            var _closure2_slot2 = michal;
            michal = entity.setFocusedSticker;
            var _closure2_slot3 = michal;
            michal = entity.channel;
            var _closure2_slot4 = michal;
            entity = entity.nativeRow;
            tangon = undefined;
            if(!(entity === tangon)) { _fun00002_ip = 110; continue _fun00001 }
 78:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 9;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isAndroid;
            entity = michal.bind(zuuluu)();
 110:
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            michal = _closure1_slot10;
            oscard = michal.bind(tangon)();
            _closure2_slot5 = oscard;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 10;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.AnimateStickers;
            michal = zuuluu.useSetting;
            michal = michal.bind(zuuluu)();
            _closure2_slot6 = michal;
            michal = function(argFoo) { // Original name: handleOnPressSticker
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 11;
                    zuuluu = oscard[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.triggerHapticFeedback;
                    report = _closure1_slot1;
                    michal = 12;
                    michal = oscard[michal];
                    michal = report.bind(entity)(michal);
                    michal = michal.IMPACT_LIGHT;
                    michal = zuuluu.bind(tangon)(michal);
                    tangon = _closure2_slot1;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 83; continue _fun00003 }
 71:
                    zuuluu = _closure2_slot1;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
 83:
                    return entity;
                }
            };
            _closure2_slot7 = michal;
            michal = function(argFoo) { // Original name: handleOnLongPressSticker
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 10;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = zuuluu.AnimateStickers;
                    zuuluu = tangon.getSetting;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANIMATE_ON_INTERACTION;
                    if(!(tangon === zuuluu)) { _fun00006_ip = 133; continue _fun00005 }
 55:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.triggerHapticFeedback;
                    report = _closure1_slot1;
                    michal = 12;
                    michal = oscard[michal];
                    michal = report.bind(entity)(michal);
                    michal = michal.IMPACT_LIGHT;
                    michal = zuuluu.bind(tangon)(michal);
                    tangon = _closure2_slot3;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00006_ip = 133; continue _fun00005 }
 121:
                    zuuluu = _closure2_slot3;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
 133:
                    return entity;
                }
            };
            _closure2_slot8 = michal;
            backup = function(argFoo) { // Original name: rowTraits
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    verify = argFoo;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 13;
                    entity = zuuluu[entity];
                    option = undefined;
                    golfie = michal.bind(option)(entity);
                    oscard = golfie.shouldAnimateSticker;
                    tangon = _closure2_slot6;
                    offset = verify.id;
                    entity = _closure2_slot2;
                    zuuluu = null;
                    yankee = zuuluu == entity;
                    entity = undefined;
                    if(yankee) { _fun00008_ip = 70; continue _fun00007 }
 61:
                    yankee = _closure2_slot2;
                    entity = yankee.id;
 70:
                    entity = offset === entity;
                    tangon = oscard.bind(golfie)(tangon, entity);
                    entity = new Array(3);
                    entity[0] = tangon;
                    tangon = _closure2_slot4;
                    tangon = zuuluu == tangon;
                    if(tangon) { _fun00008_ip = 149; continue _fun00007 }
 99:
                    golfie = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 14;
                    oscard = offset[oscard];
                    option = golfie.bind(option)(oscard);
                    golfie = option.isSendableSticker;
                    oscard = _closure1_slot5;
                    report = oscard.getCurrentUser;
                    oscard = report.bind(oscard)();
                    report = _closure2_slot4;
                    tangon = golfie.bind(option)(verify, oscard, report);
 149:
                    entity[1] = tangon;
                    michal = _closure2_slot1;
                    michal = zuuluu == michal;
                    entity[2] = michal;
                    return entity;
                }
            };
            _closure2_slot9 = backup;
            golfie = new Array(0);
            foxtra = 0;
            if(entity) { _fun00002_ip = 298; continue _fun00001 }
 229:
            _closure2_slot10 = golfie;
            michal = function() { // Original name: _loop
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot11;
                    michal = zuuluu[michal];
                    var _closure3_slot0 = michal;
                    golfie = undefined;
                    if(!(golfie !== michal)) { _fun00010_ip = 245; continue _fun00009 }
 30:
                    zuuluu = _closure2_slot9;
                    report = zuuluu.bind(golfie)(michal);
                    tangon = _closure1_slot3;
                    zuuluu = 3;
                    tangon = tangon.bind(golfie)(report, zuuluu);
                    zuuluu = 0;
                    romeon = tangon[zuuluu];
                    zuuluu = 1;
                    verify = tangon[zuuluu];
                    zuuluu = 2;
                    yankee = tangon[zuuluu];
                    tangon = _closure2_slot10;
                    zuuluu = tangon.push;
                    option = _closure1_slot9;
                    oscard = _closure1_slot0;
                    backup = _closure1_slot2;
                    report = 17;
                    report = backup[report];
                    report = oscard.bind(golfie)(report);
                    oscard = report.PressableOpacity;
                    report = {};
                    kiloes = 'button';
                    report['accessibilityRole'] = kiloes;
                    kiloes = michal.name;
                    report['accessibilityLabel'] = kiloes;
                    kiloes = _closure2_slot5;
                    kiloes = kiloes.stickerImage;
                    report['style'] = kiloes;
                    report['disabled'] = yankee;
                    yankee = function() { // Original name: onPress
                        zuuluu = _closure2_slot7;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    report['onPress'] = yankee;
                    offset = function() { // Original name: onLongPress
                        zuuluu = _closure2_slot8;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    report['onLongPress'] = offset;
                    yankee = _closure1_slot1;
                    offset = 15;
                    offset = backup[offset];
                    yankee = yankee.bind(golfie)(offset);
                    offset = {};
                    offset['sticker'] = michal;
                    foxtra = _closure1_slot7;
                    offset['size'] = foxtra;
                    offset['animated'] = romeon;
                    offset['opaque'] = verify;
                    verify = _closure2_slot11;
                    verify = option.bind(golfie)(yankee, offset, verify);
                    report['children'] = verify;
                    michal = michal.id;
                    michal = option.bind(golfie)(oscard, report, michal);
                    michal = zuuluu.bind(tangon)(michal);
                    return golfie;
 245:
                    zuuluu = _closure2_slot10;
                    michal = zuuluu.push;
                    oscard = _closure1_slot9;
                    report = _closure1_slot4;
                    tangon = {};
                    option = _closure2_slot5;
                    option = option.stickerImage;
                    tangon['style'] = option;
                    entity = _closure2_slot11;
                    entity = oscard.bind(golfie)(report, tangon, entity);
                    entity = michal.bind(zuuluu)(entity);
                    entity = 1;
                    return entity;
                }
            };
            _closure2_slot11 = foxtra;
            zuuluu = foxtra < kiloes;
            entity = 0;
            if(!zuuluu) { _fun00002_ip = 266; continue _fun00001 }
 251:
            zuuluu = michal.bind(tangon)();
            entity = entity + 1;
            _closure2_slot11 = entity;
            if(entity < kiloes) { _fun00002_ip = 251; continue _fun00001 }
 266:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot4;
            entity = {};
            offset = oscard.row;
            entity['style'] = offset;
            entity['children'] = golfie;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 298:
            output = foxtra < kiloes;
            romeon = 3;
            yankee = 1;
            offset = 2;
            zuuluu = 15;
            michal = null;
            entity = 0;
            if(!output) { _fun00002_ip = 491; continue _fun00001 }
 324:
            config = sizing[entity];
            if(!(tangon === config)) { _fun00002_ip = 347; continue _fun00001 }
 332:
            output = golfie.push;
            output = output.bind(golfie)(michal);
            _fun00002_ip = 481; continue _fun00001;
 347:
            result = backup.bind(tangon)(config);
            output = _closure1_slot3;
            output = output.bind(tangon)(result, romeon);
            source = output[foxtra];
            echoed = output[yankee];
            update = output[offset];
            result = golfie.push;
            output = {};
            ctrled = config.id;
            output['stickerId'] = ctrled;
            ctrled = config.name;
            output['stickerName'] = ctrled;
            ctrled = config.format_type;
            output['stickerType'] = ctrled;
            vacuum = _closure1_slot0;
            ctrled = _closure1_slot2;
            ctrled = ctrled[zuuluu];
            sequen = vacuum.bind(tangon)(ctrled);
            vacuum = sequen.getStickerAssetUrl;
            ctrled = _closure1_slot7;
            ctrled = vacuum.bind(sequen)(config, ctrled, source);
            output['stickerUrl'] = ctrled;
            output['stickerAnimated'] = source;
            output['stickerDisabled'] = update;
            output['stickerOpaque'] = echoed;
            output = result.bind(golfie)(output);
 481:
            entity = entity + 1;
            if(entity < kiloes) { _fun00002_ip = 324; continue _fun00001 }
 491:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 16;
            entity = offset[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            oscard = oscard.row;
            entity['style'] = oscard;
            oscard = {};
            oscard['rowContentWidth'] = verify;
            verify = _closure1_slot8;
            oscard['rowContentPaddingVertical'] = verify;
            option = _closure1_slot7;
            oscard['itemSize'] = option;
            oscard['items'] = golfie;
            entity['rowData'] = oscard;
            oscard = function(argFoo) { // Original name: onPressSticker
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    tangon = _closure2_slot0;
                    zuuluu = tangon.find;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.nativeEvent;
                        entity = entity.stickerId;
                        entity = michal === entity;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 48; continue _fun00011 }
 37:
                    michal = _closure2_slot7;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 48:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPressSticker'] = oscard;
            report = function(argFoo) { // Original name: onLongPressSticker
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    tangon = _closure2_slot0;
                    zuuluu = tangon.find;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.nativeEvent;
                        entity = entity.stickerId;
                        entity = michal === entity;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 48; continue _fun00013 }
 37:
                    michal = _closure2_slot8;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 48:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onLongPressSticker'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();