// app/modules/emoji_picker/native/components/EmojiPickerListRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        foxtra = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = foxtra;
        var _closure1_slot2 = oscard;
        entity = function(argFoo, argBar) { // Original name: getEmojiItemUrl
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                golfie = argBar;
                entity = zuuluu.id;
                michal = null;
                if(!(michal != entity)) { _fun00004_ip = 88; continue _fun00003 }
 17:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 10;
                tangon = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(tangon);
                tangon = report.getEmojiURL;
                entity = {};
                option = zuuluu.id;
                entity['id'] = option;
                if(!golfie) { _fun00004_ip = 68; continue _fun00003 }
 62:
                golfie = zuuluu.animated;
 68:
                entity['animated'] = golfie;
                oscard = _closure1_slot5;
                entity['size'] = oscard;
                entity = tangon.bind(report)(entity);
                _fun00004_ip = 110; continue _fun00003;
 88:
                zuuluu = zuuluu.url;
                tangon = michal != zuuluu;
                michal = '';
                if(!tangon) { _fun00004_ip = 107; continue _fun00003 }
 104:
                michal = zuuluu;
 107:
                entity = michal;
 110:
                return entity;
            }
        };
        var _closure1_slot12 = entity;
        entity = function() { // Original name: EmojiItemLockedOverlay
            entity = _closure1_slot9;
            tangon = undefined;
            option = entity.bind(tangon)();
            zuuluu = _closure1_slot7;
            michal = _closure1_slot3;
            entity = {};
            oscard = option.lockContainer;
            entity['style'] = oscard;
            golfie = _closure1_slot7;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 11;
            report = verify[report];
            report = oscard.bind(tangon)(report);
            oscard = report.LockIcon;
            report = {};
            option = option.lock;
            report['style'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        var _closure1_slot13 = entity;
        entity = function(argFoo) { // Original name: EmojiItem
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                offset = entity.emoji;
                var _closure2_slot0 = offset;
                michal = entity.category;
                var _closure2_slot1 = michal;
                oscard = entity.disabled;
                michal = entity.onPressEmoji;
                var _closure2_slot2 = michal;
                michal = entity.onLongPressEmoji;
                var _closure2_slot3 = michal;
                zuuluu = entity.animateEmoji;
                entity = entity.isSectionNitroLocked;
                michal = _closure1_slot9;
                tangon = undefined;
                yankee = michal.bind(tangon)();
                michal = _closure1_slot12;
                romeon = michal.bind(tangon)(offset, zuuluu);
                if(!oscard) { _fun00006_ip = 90; continue _fun00005 }
 87:
                oscard = !entity;
 90:
                zuuluu = _closure1_slot8;
                michal = _closure1_slot0;
                option = _closure1_slot2;
                entity = 12;
                entity = option[entity];
                entity = michal.bind(tangon)(entity);
                michal = entity.PressableOpacity;
                entity = {};
                option = 'button';
                entity['accessibilityRole'] = option;
                option = offset.name;
                entity['accessibilityLabel'] = option;
                verify = yankee.surrogatesFrame;
                option = new Array(2);
                option[0] = verify;
                verify = oscard;
                if(!oscard) { _fun00006_ip = 165; continue _fun00005 }
 159:
                verify = yankee.disabledOverlay;
 165:
                option[1] = verify;
                entity['style'] = option;
                option = function() { // Original name: onPress
                    tangon = _closure2_slot2;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                entity['onPress'] = option;
                report = function() { // Original name: onLongPress
                    zuuluu = _closure2_slot3;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity['onLongPress'] = report;
                option = offset.id;
                report = null;
                if(!(report == option)) { _fun00006_ip = 271; continue _fun00005 }
 203:
                verify = _closure1_slot7;
                option = _closure1_slot0;
                foxtra = _closure1_slot2;
                report = 17;
                report = foxtra[report];
                report = option.bind(tangon)(report);
                option = report.LegacyText;
                report = {};
                foxtra = false;
                report['allowFontScaling'] = foxtra;
                foxtra = yankee.surrogates;
                report['style'] = foxtra;
                offset = offset.surrogates;
                report['children'] = offset;
                option = verify.bind(tangon)(option, report);
                _fun00006_ip = 418; continue _fun00005;
 271:
                offset = _closure1_slot7;
                verify = _closure1_slot1;
                backup = _closure1_slot2;
                report = 13;
                report = backup[report];
                verify = verify.bind(tangon)(report);
                report = {};
                foxtra = 'contain';
                report['resizeMode'] = foxtra;
                yankee = yankee.image;
                report['style'] = yankee;
                foxtra = _closure1_slot0;
                yankee = 14;
                yankee = backup[yankee];
                backup = foxtra.bind(tangon)(yankee);
                foxtra = backup.isThemeDark;
                yankee = _closure1_slot4;
                yankee = yankee.theme;
                yankee = foxtra.bind(backup)(yankee);
                backup = _closure1_slot1;
                kiloes = _closure1_slot2;
                if(yankee) { _fun00006_ip = 378; continue _fun00005 }
 364:
                yankee = 16;
                yankee = kiloes[yankee];
                yankee = backup.bind(tangon)(yankee);
                _fun00006_ip = 390; continue _fun00005;
 378:
                foxtra = 15;
                foxtra = kiloes[foxtra];
                yankee = backup.bind(tangon)(foxtra);
 390:
                report['placeholder'] = yankee;
                yankee = {};
                yankee['uri'] = romeon;
                report['source'] = yankee;
                yankee = true;
                report['usesSmallCache'] = yankee;
                option = offset.bind(tangon)(verify, report);
 418:
                report = new Array(2);
                report[0] = option;
                if(!oscard) { _fun00006_ip = 445; continue _fun00005 }
 429:
                verify = _closure1_slot7;
                option = _closure1_slot13;
                golfie = {};
                oscard = verify.bind(tangon)(option, golfie);
 445:
                report[1] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = global;
        option = entity.Object;
        golfie = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        golfie = oscard[entity];
        tangon = argCor;
        entity = undefined;
        golfie = tangon.bind(entity)(golfie);
        tangon = 1;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        option = tangon.View;
        var _closure1_slot3 = option;
        yankee = tangon.StyleSheet;
        tangon = 2;
        tangon = oscard[tangon];
        tangon = foxtra.bind(entity)(tangon);
        var _closure1_slot4 = tangon;
        tangon = 3;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        backup = tangon.IMAGE_SIZE;
        var _closure1_slot5 = backup;
        romeon = tangon.ROW_HEIGHT;
        tangon = 4;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.PADDING_VERTICAL;
        var _closure1_slot6 = tangon;
        tangon = 5;
        option = oscard[tangon];
        option = report.bind(entity)(option);
        option = option.jsx;
        var _closure1_slot7 = option;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.jsxs;
        var _closure1_slot8 = tangon;
        tangon = 6;
        tangon = oscard[tangon];
        verify = report.bind(entity)(tangon);
        option = verify.createStyles;
        tangon = {};
        offset = {};
        offset['height'] = backup;
        offset['width'] = backup;
        tangon['image'] = offset;
        offset = {};
        offset['height'] = backup;
        offset['width'] = backup;
        backup = 'center';
        offset['alignItems'] = backup;
        offset['justifyContent'] = backup;
        tangon['surrogatesFrame'] = offset;
        offset = {};
        backup = 7;
        backup = oscard[backup];
        backup = foxtra.bind(entity)(backup);
        backup = backup.radii;
        backup = backup.sm;
        offset['borderRadius'] = backup;
        backup = 'hidden';
        offset['overflow'] = backup;
        tangon['disabledOverlay'] = offset;
        offset = {};
        backup = 8;
        backup = oscard[backup];
        kiloes = report.bind(entity)(backup);
        backup = kiloes.isAndroid;
        kiloes = backup.bind(kiloes)();
        backup = 30;
        if(!kiloes) { _fun00002_ip = 369; continue _fun00001 }
 366:
        backup = 26;
 369:
        offset['fontSize'] = backup;
        tangon['surrogates'] = offset;
        offset = {'height': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
        offset['height'] = romeon;
        tangon['row'] = offset;
        offset = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
        romeon = 9;
        romeon = oscard[romeon];
        foxtra = foxtra.bind(entity)(romeon);
        romeon = '#000000';
        backup = foxtra.bind(entity)(romeon);
        foxtra = backup.alpha;
        romeon = 0.2;
        foxtra = foxtra.bind(backup)(romeon);
        romeon = foxtra.hex;
        romeon = romeon.bind(foxtra)();
        offset['backgroundColor'] = romeon;
        output = yankee.absoluteFillObject;
        result = offset;
        yankee = copyDataProperties(result, output);
        tangon['lockContainer'] = offset;
        offset = {'width': 16, 'height': 16, 'tintColor': 'white'};
        tangon['lock'] = offset;
        tangon = option.bind(verify)(tangon);
        var _closure1_slot9 = tangon;
        option = golfie.memo;
        tangon = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = argFoo;
                echoed = michal.emojis;
                var _closure2_slot0 = echoed;
                result = michal.emojisDisabled;
                entity = michal.category;
                var _closure2_slot1 = entity;
                output = michal.rowSize;
                offset = michal.containerWidth;
                entity = michal.row;
                zuuluu = michal.onPressEmoji;
                var _closure2_slot2 = zuuluu;
                zuuluu = michal.onLongPressEmoji;
                var _closure2_slot3 = zuuluu;
                sizing = michal.animateEmoji;
                golfie = michal.isSectionNitroLocked;
                michal = _closure1_slot9;
                tangon = undefined;
                oscard = michal.bind(tangon)();
                option = new Array(0);
                kiloes = entity * output;
                entity = kiloes + output;
                backup = null;
                foxtra = '';
                romeon = true;
                yankee = undefined;
                zuuluu = undefined;
                michal = kiloes;
                if(!(michal < entity)) { _fun00008_ip = 311; continue _fun00007 }
 127:
                sequen = echoed[michal];
                if(!(tangon !== sequen)) { _fun00008_ip = 261; continue _fun00007 }
 138:
                ctrled = option.push;
                entity = {};
                source = sequen.id;
                vacuum = backup != source;
                update = null;
                if(!vacuum) { _fun00008_ip = 162; continue _fun00007 }
 159:
                update = source;
 162:
                entity['id'] = update;
                update = sequen.name;
                config = backup != update;
                vacuum = foxtra;
                if(!config) { _fun00008_ip = 184; continue _fun00007 }
 181:
                vacuum = update;
 184:
                entity['name'] = vacuum;
                vacuum = _closure1_slot12;
                vacuum = vacuum.bind(tangon)(sequen, sizing);
                entity['url'] = vacuum;
                vacuum = sequen.animated;
                vacuum = romeon === vacuum;
                if(!vacuum) { _fun00008_ip = 218; continue _fun00007 }
 215:
                vacuum = sizing;
 218:
                entity['animated'] = vacuum;
                vacuum = sequen.id;
                vacuum = backup != vacuum;
                if(!vacuum) { _fun00008_ip = 250; continue _fun00007 }
 235:
                config = result.has;
                sequen = sequen.id;
                vacuum = config.bind(result)(sequen);
 250:
                entity['disabled'] = vacuum;
                entity = ctrled.bind(option)(entity);
                _fun00008_ip = 291; continue _fun00007;
 261:
                ctrled = option.push;
                entity = {'id': null, 'name': '', 'url': '', 'animated': false, 'disabled': false};
                entity = ctrled.bind(option)(entity);
                source = yankee;
                update = zuuluu;
 291:
                michal = michal + 1;
                entity = kiloes + output;
                yankee = source;
                zuuluu = update;
                if(michal < entity) { _fun00008_ip = 127; continue _fun00007 }
 311:
                zuuluu = _closure1_slot7;
                michal = _closure1_slot1;
                yankee = _closure1_slot2;
                entity = 18;
                entity = yankee[entity];
                michal = michal.bind(tangon)(entity);
                entity = {};
                oscard = oscard.row;
                entity['style'] = oscard;
                oscard = {};
                oscard['rowContentWidth'] = offset;
                offset = _closure1_slot6;
                oscard['rowContentPaddingVertical'] = offset;
                verify = _closure1_slot5;
                oscard['itemSize'] = verify;
                oscard['items'] = option;
                oscard['isSectionNitroLocked'] = golfie;
                entity['rowData'] = oscard;
                oscard = function(argFoo) { // Original name: onPressEmoji
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        var _closure3_slot0 = entity;
                        tangon = _closure2_slot0;
                        zuuluu = tangon.find;
                        michal = function(argFoo) {
                            entity = argFoo;
                            michal = entity.name;
                            entity = _closure3_slot0;
                            entity = entity.nativeEvent;
                            entity = entity.emojiName;
                            entity = michal === entity;
                            return entity;
                        };
                        tangon = zuuluu.bind(tangon)(michal);
                        michal = null;
                        if(!(michal != tangon)) { _fun00010_ip = 53; continue _fun00009 }
 37:
                        zuuluu = _closure2_slot2;
                        michal = _closure2_slot1;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(tangon, michal);
 53:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onPressEmoji'] = oscard;
                report = function(argFoo) { // Original name: onLongPressEmoji
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        var _closure3_slot0 = entity;
                        tangon = _closure2_slot0;
                        zuuluu = tangon.find;
                        michal = function(argFoo) {
                            entity = argFoo;
                            michal = entity.name;
                            entity = _closure3_slot0;
                            entity = entity.nativeEvent;
                            entity = entity.emojiName;
                            entity = michal === entity;
                            return entity;
                        };
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00012_ip = 48; continue _fun00011 }
 37:
                        michal = _closure2_slot3;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
 48:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onLongPressEmoji'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        tangon = option.bind(golfie)(tangon);
        var _closure1_slot10 = tangon;
        option = golfie.memo;
        tangon = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                sizing = entity.emojis;
                kiloes = entity.emojisDisabled;
                backup = entity.category;
                foxtra = entity.rowSize;
                michal = entity.row;
                romeon = entity.onPressEmoji;
                yankee = entity.onLongPressEmoji;
                offset = entity.animateEmoji;
                verify = entity.isSectionNitroLocked;
                zuuluu = _closure1_slot9;
                tangon = undefined;
                oscard = zuuluu.bind(tangon)();
                report = new Array(0);
                option = michal * foxtra;
                michal = option + foxtra;
                golfie = null;
                zuuluu = option;
                if(!(zuuluu < michal)) { _fun00014_ip = 241; continue _fun00013 }
 93:
                source = sizing[zuuluu];
                if(!(tangon !== source)) { _fun00014_ip = 190; continue _fun00013 }
 101:
                output = report.push;
                echoed = _closure1_slot7;
                result = _closure1_slot14;
                michal = {};
                michal['emoji'] = source;
                michal['category'] = backup;
                michal['animateEmoji'] = offset;
                update = source.id;
                update = golfie != update;
                if(!update) { _fun00014_ip = 157; continue _fun00013 }
 142:
                ctrled = kiloes.has;
                source = source.id;
                update = ctrled.bind(kiloes)(source);
 157:
                michal['disabled'] = update;
                michal['onPressEmoji'] = romeon;
                michal['onLongPressEmoji'] = yankee;
                michal['isSectionNitroLocked'] = verify;
                michal = echoed.bind(tangon)(result, michal, zuuluu);
                michal = output.bind(report)(michal);
                _fun00014_ip = 227; continue _fun00013;
 190:
                output = report.push;
                echoed = _closure1_slot7;
                result = _closure1_slot3;
                michal = {};
                update = oscard.image;
                michal['style'] = update;
                michal = echoed.bind(tangon)(result, michal, zuuluu);
                michal = output.bind(report)(michal);
 227:
                zuuluu = zuuluu + 1;
                michal = option + foxtra;
                if(zuuluu < michal) { _fun00014_ip = 93; continue _fun00013 }
 241:
                zuuluu = _closure1_slot7;
                michal = _closure1_slot3;
                entity = {};
                oscard = oscard.row;
                entity['style'] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        tangon = option.bind(golfie)(tangon);
        var _closure1_slot11 = tangon;
        tangon = golfie.memo;
        michal = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                michal = report.nativeRow;
                tangon = undefined;
                if(!(michal === tangon)) { _fun00016_ip = 47; continue _fun00015 }
 15:
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                entity = oscard[entity];
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = zuuluu.isAndroid;
                michal = entity.bind(zuuluu)();
 47:
                entity = null;
                zuuluu = Object.create(entity);
                entity = 0;
                zuuluu['nativeRow'] = entity;
                verify = {};
                option = report;
                golfie = zuuluu;
                report = copyDataProperties(verify, option, golfie);
                zuuluu = _closure1_slot7;
                if(michal) { _fun00016_ip = 87; continue _fun00015 }
 81:
                michal = _closure1_slot11;
                _fun00016_ip = 91; continue _fun00015;
 87:
                michal = _closure1_slot10;
 91:
                entity = {};
                verify = entity;
                option = report;
                report = copyDataProperties(verify, option);
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        michal = tangon.bind(golfie)(michal);
        tangon = 19;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/emoji_picker/native/components/EmojiPickerListRow.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['EmojiPickerListRow'] = michal;
        return entity;
    }
})();