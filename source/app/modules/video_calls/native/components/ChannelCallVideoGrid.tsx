// app/modules/video_calls/native/components/ChannelCallVideoGrid.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ChannelCallVideoGridList
        _fun104168: for(var _fun104168_ip = 0; ; ) switch(_fun104168_ip) {
 0:
            zulu = argFoo;
            entity = zulu.channel;
            var _closure2_slot0 = entity;
            verify = zulu.filteredParticipants;
            report = undefined;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 22;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.bind(report)();
            offset = zulu.height;
            zulu = zulu.width;
            tango = zulu > offset;
            var _closure2_slot1 = tango;
            golf = 2;
            if(!tango) { _fun104168_ip = 92; continue _fun104168 }
 89:
            golf = 4;
 92:
            oscar = function(argFoo, argBar) { // Original name: getGridData
                _fun104169: for(var _fun104169_ip = 0; ; ) switch(_fun104169_ip) {
 0:
                    zulu = argFoo;
                    tango = argBar;
                    mike = tango.some;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        entity = _closure1_slot12;
                        entity = entity.ACTIVITY;
                        entity = mike === entity;
                        return entity;
                    };
                    entity = mike.bind(tango)(entity);
                    mike = !entity;
                    if(!mike) { _fun104169_ip = 48; continue _fun104169 }
 32:
                    oscar = tango.length;
                    report = 2;
                    report = report * zulu;
                    mike = oscar <= report;
 48:
                    if(!entity) { _fun104169_ip = 60; continue _fun104169 }
 51:
                    report = tango.length;
                    entity = report <= zulu;
 60:
                    oscar = tango.length;
                    report = 1;
                    if(!(oscar > report)) { _fun104169_ip = 78; continue _fun104169 }
 72:
                    if(mike) { _fun104169_ip = 117; continue _fun104169 }
 75:
                    if(entity) { _fun104169_ip = 117; continue _fun104169 }
 78:
                    report = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 18;
                    mike = mike[entity];
                    entity = undefined;
                    mike = report.bind(entity)(mike);
                    entity = mike.chunk;
                    entity = entity.bind(mike)(tango, zulu);
                    _fun104169_ip = 131; continue _fun104169;
 117:
                    zulu = _closure1_slot16;
                    mike = undefined;
                    entity = zulu.bind(mike)(tango);
 131:
                    return entity;
                }
            };
            verify = oscar.bind(report)(golf, verify);
            _closure2_slot2 = verify;
            golf = verify.length;
            oscar = function(argFoo, argBar, argBaz) { // Original name: useCellSize
                _fun104171: for(var _fun104171_ip = 0; ; ) switch(_fun104171_ip) {
 0:
                    options = argBar;
                    golf = argBaz;
                    var _closure3_slot0 = options;
                    var _closure3_slot1 = golf;
                    mike = argFoo;
                    oscar = mike > options;
                    var _closure3_slot2 = oscar;
                    report = 4;
                    if(!oscar) { _fun104171_ip = 36; continue _fun104171 }
 33:
                    report = 2;
 36:
                    var _closure3_slot3 = report;
                    tango = _closure1_slot4;
                    zulu = tango.useMemo;
                    mike = new Array(4);
                    mike[0] = options;
                    mike[1] = golf;
                    mike[2] = oscar;
                    mike[3] = report;
                    entity = function() {
                        _fun104172: for(var _fun104172_ip = 0; ; ) switch(_fun104172_ip) {
 0:
                            mike = _closure3_slot0;
                            entity = _closure3_slot1;
                            zulu = mike / entity;
                            entity = _closure3_slot3;
                            mike = mike / entity;
                            entity = global;
                            tango = entity.Math;
                            entity = tango.max;
                            tango = entity.bind(tango)(zulu, mike);
                            golf = _closure1_slot0;
                            oscar = _closure1_slot2;
                            offset = 21;
                            oscar = oscar[offset];
                            verify = undefined;
                            oscar = golf.bind(verify)(oscar);
                            oscar = oscar.AvatarSizes;
                            oscar = oscar.PROFILE;
                            oscar = 420;
                            if(!(!(tango > oscar))) { _fun104172_ip = 202; continue _fun104172 }
 89:
                            oscar = 240;
                            if(!(!(tango > oscar))) { _fun104172_ip = 169; continue _fun104172 }
 96:
                            oscar = 160;
                            if(!(!(tango > oscar))) { _fun104172_ip = 136; continue _fun104172 }
 103:
                            golf = _closure1_slot0;
                            oscar = _closure1_slot2;
                            oscar = oscar[offset];
                            oscar = golf.bind(verify)(oscar);
                            oscar = oscar.AvatarSizes;
                            golf = oscar.LARGE;
                            oscar = true;
                            _fun104172_ip = 233; continue _fun104172;
 136:
                            yankee = _closure1_slot0;
                            options = _closure1_slot2;
                            options = options[offset];
                            options = yankee.bind(verify)(options);
                            options = options.AvatarSizes;
                            golf = options.XLARGE;
                            oscar = true;
                            _fun104172_ip = 233; continue _fun104172;
 169:
                            yankee = _closure1_slot0;
                            options = _closure1_slot2;
                            options = options[offset];
                            options = yankee.bind(verify)(options);
                            options = options.AvatarSizes;
                            golf = options.XXLARGE;
                            oscar = true;
                            _fun104172_ip = 233; continue _fun104172;
 202:
                            options = _closure1_slot0;
                            entity = _closure1_slot2;
                            entity = entity[offset];
                            entity = options.bind(verify)(entity);
                            entity = entity.AvatarSizes;
                            golf = entity.PROFILE;
                            oscar = false;
 233:
                            entity = {};
                            entity['avatarSize'] = golf;
                            entity['shrinkStreamEmptyState'] = oscar;
                            report = _closure3_slot2;
                            entity['isLandscape'] = report;
                            entity['size'] = tango;
                            entity['fitSize'] = zulu;
                            entity['minSize'] = mike;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                }
            };
            oscar = oscar.bind(report)(zulu, offset, golf);
            foxtrot = oscar.avatarSize;
            _closure2_slot3 = foxtrot;
            sizing = oscar.shrinkStreamEmptyState;
            _closure2_slot4 = sizing;
            kilo = oscar.size;
            _closure2_slot5 = kilo;
            backup = oscar.fitSize;
            golf = oscar.minSize;
            romeo = _closure1_slot4;
            yankee = romeo.useCallback;
            output = verify.length;
            oscar = new Array(6);
            oscar[0] = output;
            oscar[1] = entity;
            oscar[2] = kilo;
            oscar[3] = sizing;
            oscar[4] = foxtrot;
            oscar[5] = tango;
            tango = function(argFoo) {
                entity = argFoo;
                yankee = entity.item;
                oscar = entity.index;
                entity = _closure2_slot2;
                mike = entity.length;
                entity = 1;
                report = mike - entity;
                zulu = _closure1_slot18;
                mike = new Array(0);
                golf = 0;
                romeo = mike;
                offset = 0;
                tango = arraySpread(romeo, yankee, offset);
                tango = undefined;
                romeo = zulu;
                yankee = mike;
                offset = undefined;
                verify = apply(romeo, yankee, offset);
                zulu = _closure1_slot13;
                mike = _closure1_slot15;
                entity = {};
                entity['participants'] = verify;
                verify = _closure2_slot0;
                entity['channel'] = verify;
                verify = _closure2_slot5;
                entity['size'] = verify;
                verify = _closure2_slot4;
                entity['shrinkStreamEmptyState'] = verify;
                verify = _closure2_slot3;
                entity['avatarSize'] = verify;
                options = _closure2_slot1;
                entity['isLandscape'] = options;
                golf = golf === oscar;
                entity['isFirstRow'] = golf;
                report = oscar === report;
                entity['isLastRow'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            oscar = yankee.bind(romeo)(tango, oscar);
            foxtrot = _closure1_slot4;
            romeo = foxtrot.useCallback;
            yankee = new Array(1);
            yankee[0] = kilo;
            tango = function(argFoo, argBar) {
                mike = argBar;
                entity = {};
                tango = _closure2_slot5;
                entity['length'] = tango;
                zulu = _closure2_slot5;
                zulu = zulu * mike;
                entity['offset'] = zulu;
                entity['index'] = mike;
                return entity;
            };
            yankee = romeo.bind(foxtrot)(tango, yankee);
            mike = function(argFoo, argBar) { // Original name: useScrollProps
                offset = argBar;
                entity = argFoo;
                verify = entity > offset;
                var _closure3_slot0 = verify;
                oscar = _closure1_slot4;
                zulu = oscar.useRef;
                mike = _closure1_slot6;
                mike = mike.Value;
                report = mike.prototype;
                golf = Object.create(report, {constructor: {value: mike}});
                report = 0;
                foxtrot = golf;
                romeo = 0;
                mike = new foxtrot[mike](romeo, yankee);
                mike = mike instanceof Object ? mike : golf;
                oscar = zulu.bind(oscar)(mike);
                var _closure3_slot1 = oscar;
                zulu = _closure1_slot4;
                mike = zulu.useRef;
                mike = mike.bind(zulu)(report);
                var _closure3_slot2 = mike;
                golf = _closure1_slot4;
                report = golf.useCallback;
                zulu = function() {
                    mike = _closure3_slot2;
                    entity = global;
                    zulu = entity.performance;
                    entity = zulu.now;
                    entity = entity.bind(zulu)();
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                mike = new Array(0);
                mike = report.bind(golf)(zulu, mike);
                options = _closure1_slot4;
                golf = options.useCallback;
                report = new Array(1);
                report[0] = verify;
                zulu = function(argFoo) {
                    _fun104177: for(var _fun104177_ip = 0; ; ) switch(_fun104177_ip) {
 0:
                        mike = _closure3_slot0;
                        if(mike) { _fun104177_ip = 130; continue _fun104177 }
 10:
                        mike = global;
                        zulu = mike.performance;
                        mike = zulu.now;
                        mike = mike.bind(zulu)();
                        entity = _closure3_slot2;
                        entity = entity.current;
                        report = mike - entity;
                        entity = argFoo;
                        entity = entity.nativeEvent;
                        entity = entity.contentOffset;
                        tango = entity.y;
                        mike = _closure1_slot20;
                        mike = tango <= mike;
                        if(mike) { _fun104177_ip = 95; continue _fun104177 }
 73:
                        zulu = _closure1_slot21;
                        zulu = tango < zulu;
                        if(!zulu) { _fun104177_ip = 92; continue _fun104177 }
 84:
                        tango = _closure1_slot19;
                        zulu = report < tango;
 92:
                        mike = zulu;
 95:
                        if(!mike) { _fun104177_ip = 130; continue _fun104177 }
 98:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 19;
                        mike = mike[entity];
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        entity = mike.pop;
                        entity = entity.bind(mike)();
 130:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = golf.bind(options)(zulu, report);
                options = _closure1_slot4;
                golf = options.useCallback;
                report = new Array(1);
                report[0] = verify;
                tango = function(argFoo) {
                    _fun104178: for(var _fun104178_ip = 0; ; ) switch(_fun104178_ip) {
 0:
                        mike = _closure3_slot0;
                        if(mike) { _fun104178_ip = 102; continue _fun104178 }
 10:
                        entity = _closure3_slot1;
                        zulu = entity.current;
                        mike = zulu.setValue;
                        entity = global;
                        golf = entity.Math;
                        oscar = golf.min;
                        verify = entity.Math;
                        options = verify.max;
                        entity = argFoo;
                        entity = entity.nativeEvent;
                        entity = entity.contentOffset;
                        report = entity.y;
                        tango = _closure1_slot20;
                        report = options.bind(verify)(report, tango);
                        tango = 0;
                        tango = oscar.bind(golf)(report, tango);
                        entity = _closure1_slot20;
                        entity = tango / entity;
                        entity = mike.bind(zulu)(entity);
 102:
                        entity = undefined;
                        return entity;
                    }
                };
                tango = golf.bind(options)(tango, report);
                golf = _closure1_slot1;
                report = _closure1_slot2;
                entity = 20;
                entity = report[entity];
                report = undefined;
                entity = golf.bind(report)(entity);
                verify = entity.bind(report)(oscar);
                entity = {};
                oscar = {};
                golf = verify.interpolate;
                report = {};
                options = [0, 1];
                report['inputRange'] = options;
                options = 0.05;
                offset = options * offset;
                options = [0];
                options[1] = offset;
                report['outputRange'] = options;
                report = golf.bind(verify)(report);
                oscar['translateY'] = report;
                report = new Array(2);
                report[0] = oscar;
                oscar = {};
                options = verify.interpolate;
                golf = {};
                offset = [0, 1];
                golf['inputRange'] = offset;
                offset = [1, 0.9];
                golf['outputRange'] = offset;
                golf = options.bind(verify)(golf);
                oscar['scale'] = golf;
                report[1] = oscar;
                entity['transform'] = report;
                entity['onScroll'] = tango;
                entity['onScrollEndDrag'] = zulu;
                entity['onScrollStartDrag'] = mike;
                return entity;
            };
            mike = mike.bind(report)(zulu, offset);
            romeo = mike.onScrollEndDrag;
            foxtrot = mike.onScroll;
            tango = mike.onScrollStartDrag;
            output = mike.transform;
            mike = entity.type;
            zulu = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 23;
            entity = sizing[entity];
            entity = zulu.bind(report)(entity);
            entity = entity.ChannelTypes;
            entity = entity.GUILD_VOICE;
            if(!(mike !== entity)) { _fun104168_ip = 504; continue _fun104168 }
 334:
            zulu = _closure1_slot13;
            entity = _closure1_slot6;
            mike = entity.FlatList;
            entity = {};
            sizing = {};
            sizing['transform'] = output;
            entity['style'] = sizing;
            backup = kilo !== backup;
            entity['bounces'] = backup;
            entity['onScroll'] = foxtrot;
            entity['onScrollEndDrag'] = romeo;
            entity['onScrollBeginDrag'] = tango;
            tango = false;
            entity['showsVerticalScrollIndicator'] = tango;
            entity['showsHorizontalScrollIndicator'] = tango;
            entity['getItemLayout'] = yankee;
            entity['data'] = verify;
            tango = _closure1_slot17;
            entity['keyExtractor'] = tango;
            entity['renderItem'] = oscar;
            tango = 16;
            entity['scrollEventThrottle'] = tango;
            romeo = global;
            kilo = romeo.Math;
            backup = kilo.ceil;
            foxtrot = offset / golf;
            foxtrot = backup.bind(kilo)(foxtrot);
            entity['maxToRenderPerBatch'] = foxtrot;
            backup = romeo.Math;
            foxtrot = backup.ceil;
            romeo = offset / golf;
            romeo = foxtrot.bind(backup)(romeo);
            entity['initialNumToRender'] = romeo;
            entity['windowSize'] = tango;
            tango = true;
            entity['removeClippedSubviews'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun104168_ip = 638; continue _fun104168;
 504:
            tango = _closure1_slot13;
            zulu = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 24;
            mike = romeo[mike];
            zulu = zulu.bind(report)(mike);
            mike = {'showsVerticalScrollIndicator': false, 'showsHorizontalScrollIndicator': false};
            mike['getItemLayout'] = yankee;
            mike['data'] = verify;
            options = _closure1_slot17;
            mike['keyExtractor'] = options;
            mike['renderItem'] = oscar;
            oscar = 16;
            mike['scrollEventThrottle'] = oscar;
            options = global;
            romeo = options.Math;
            yankee = romeo.ceil;
            verify = offset / golf;
            verify = yankee.bind(romeo)(verify);
            mike['maxToRenderPerBatch'] = verify;
            verify = options.Math;
            options = verify.ceil;
            golf = offset / golf;
            golf = options.bind(verify)(golf);
            mike['initialNumToRender'] = golf;
            mike['windowSize'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 638:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.View;
    var _closure1_slot5 = verify;
    tango = tango.Animated;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.isStreamParticipant;
    var _closure1_slot10 = options;
    options = tango.isActivityParticipant;
    var _closure1_slot11 = options;
    tango = tango.ParticipantTypes;
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot13 = tango;
    tango = 8;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 'row';
    offset['flexDirection'] = yankee;
    tango['row'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot14 = tango;
    options = golf.memo;
    tango = function(argFoo) {
        entity = argFoo;
        golf = entity.participants;
        var _closure2_slot0 = golf;
        mike = entity.channel;
        var _closure2_slot1 = mike;
        mike = entity.isLandscape;
        var _closure2_slot2 = mike;
        zulu = entity.size;
        mike = entity.avatarSize;
        var _closure2_slot3 = mike;
        mike = entity.isLastRow;
        var _closure2_slot4 = mike;
        mike = entity.isFirstRow;
        var _closure2_slot5 = mike;
        entity = entity.shrinkStreamEmptyState;
        var _closure2_slot6 = entity;
        mike = _closure1_slot14;
        tango = undefined;
        oscar = mike.bind(tango)();
        mike = {};
        options = 1;
        mike['flex'] = options;
        mike['height'] = zulu;
        var _closure2_slot7 = mike;
        zulu = _closure1_slot13;
        mike = _closure1_slot5;
        entity = {};
        oscar = oscar.row;
        entity['style'] = oscar;
        oscar = golf.map;
        report = function(argFoo, argBar) {
            _fun104180: for(var _fun104180_ip = 0; ; ) switch(_fun104180_ip) {
 0:
                oscar = argFoo;
                foxtrot = argBar;
                offset = _closure2_slot2;
                if(!offset) { _fun104180_ip = 36; continue _fun104180 }
 16:
                mike = _closure2_slot0;
                zulu = mike.length;
                mike = 1;
                mike = zulu - mike;
                offset = foxtrot === mike;
 36:
                report = _closure1_slot13;
                tango = _closure1_slot5;
                zulu = {};
                mike = _closure2_slot7;
                zulu['style'] = mike;
                verify = _closure1_slot13;
                options = _closure1_slot1;
                golf = _closure1_slot2;
                mike = 9;
                golf = golf[mike];
                mike = undefined;
                options = options.bind(mike)(golf);
                golf = {};
                yankee = _closure2_slot6;
                golf['shrinkStreamEmptyState'] = yankee;
                yankee = _closure2_slot3;
                golf['avatarSize'] = yankee;
                golf['participant'] = oscar;
                yankee = _closure2_slot5;
                if(!yankee) { _fun104180_ip = 121; continue _fun104180 }
 115:
                backup = 0;
                yankee = backup === foxtrot;
 121:
                if(!yankee) { _fun104180_ip = 140; continue _fun104180 }
 124:
                backup = _closure2_slot0;
                kilo = backup.length;
                backup = 1;
                yankee = kilo > backup;
 140:
                if(!yankee) { _fun104180_ip = 173; continue _fun104180 }
 143:
                backup = _closure1_slot0;
                kilo = _closure1_slot2;
                romeo = 10;
                romeo = kilo[romeo];
                backup = backup.bind(mike)(romeo);
                romeo = backup.isIOS;
                yankee = romeo.bind(backup)();
 173:
                golf['hasNotch'] = yankee;
                yankee = _closure2_slot1;
                golf['channel'] = yankee;
                yankee = _closure2_slot5;
                golf['hasTopSafeArea'] = yankee;
                yankee = _closure2_slot2;
                if(!yankee) { _fun104180_ip = 208; continue _fun104180 }
 202:
                romeo = 0;
                yankee = romeo === foxtrot;
 208:
                golf['hasLeftSafeArea'] = yankee;
                golf['hasRightSafeArea'] = offset;
                offset = _closure2_slot4;
                golf['hasBottomSafeArea'] = offset;
                golf = verify.bind(mike)(options, golf);
                zulu['children'] = golf;
                verify = oscar.id;
                options = _closure2_slot2;
                entity = global;
                entity = entity.HermesInternal;
                golf = entity.concat;
                oscar = '';
                entity = '+';
                entity = golf.bind(oscar)(verify, entity, options);
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            }
        };
        report = oscar.bind(golf)(report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    tango = options.bind(golf)(tango);
    var _closure1_slot15 = tango;
    tango = function(argFoo) { // Original name: takeTurns
        report = argFoo;
        zulu = new Array(0);
        var _closure2_slot0 = zulu;
        mike = new Array(0);
        var _closure2_slot1 = mike;
        tango = report.forEach;
        entity = function(argFoo) {
            _fun104182: for(var _fun104182_ip = 0; ; ) switch(_fun104182_ip) {
 0:
                zulu = argFoo;
                mike = _closure2_slot0;
                tango = mike.length;
                mike = _closure2_slot1;
                mike = mike.length;
                if(!(tango !== mike)) { _fun104182_ip = 44; continue _fun104182 }
 28:
                tango = _closure2_slot1;
                mike = tango.push;
                mike = mike.bind(tango)(zulu);
                _fun104182_ip = 58; continue _fun104182;
 44:
                mike = _closure2_slot0;
                entity = mike.push;
                entity = entity.bind(mike)(zulu);
 58:
                entity = undefined;
                return entity;
            }
        };
        entity = tango.bind(report)(entity);
        entity = new Array(2);
        entity[0] = zulu;
        entity[1] = mike;
        return entity;
    };
    var _closure1_slot16 = tango;
    tango = function(argFoo) { // Original name: keyExtractor
        _fun104183: for(var _fun104183_ip = 0; ; ) switch(_fun104183_ip) {
 0:
            report = argFoo;
            entity = 0;
            zulu = report[entity];
            tango = null;
            oscar = tango == zulu;
            entity = undefined;
            if(oscar) { _fun104183_ip = 25; continue _fun104183 }
 20:
            entity = zulu.id;
 25:
            zulu = 1;
            zulu = report[zulu];
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun104183_ip = 46; continue _fun104183 }
 41:
            mike = zulu.id;
 46:
            entity = entity + mike;
            return entity;
        }
    };
    var _closure1_slot17 = tango;
    tango = 11;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.cachedFunction;
    tango = function(argFoo) {
        mike = 0;
        entity = copyRestArgs(mike);
        return entity;
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot18 = tango;
    tango = 150;
    var _closure1_slot19 = tango;
    tango = -100;
    var _closure1_slot20 = tango;
    tango = -5;
    var _closure1_slot21 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: ChannelCallVideoGrid
        _fun104185: for(var _fun104185_ip = 0; ; ) switch(_fun104185_ip) {
 0:
            entity = argFoo;
            golf = entity.channel;
            var _closure2_slot0 = golf;
            oscar = undefined;
            var _closure2_slot1 = oscar;
            var _closure2_slot2 = oscar;
            mike = _closure1_slot8;
            entity = mike.getCurrentUser;
            tango = entity.bind(mike)();
            entity = null;
            options = entity == tango;
            mike = undefined;
            if(options) { _fun104185_ip = 56; continue _fun104185 }
 51:
            mike = tango.id;
 56:
            _closure2_slot1 = mike;
            options = _closure1_slot1;
            mike = _closure1_slot2;
            tango = 12;
            tango = mike[tango];
            tango = options.bind(oscar)(tango);
            options = tango.bind(oscar)();
            verify = _closure1_slot0;
            tango = 13;
            mike = mike[tango];
            yankee = verify.bind(oscar)(mike);
            offset = yankee.useStateFromStores;
            mike = _closure1_slot9;
            verify = new Array(1);
            verify[0] = mike;
            mike = function() {
                tango = _closure1_slot9;
                zulu = tango.isInChannel;
                mike = _closure2_slot0;
                mike = mike.id;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = offset.bind(yankee)(verify, mike);
            if(mike) { _fun104185_ip = 156; continue _fun104185 }
 133:
            offset = entity == options;
            verify = undefined;
            if(offset) { _fun104185_ip = 147; continue _fun104185 }
 142:
            verify = options.channelId;
 147:
            options = golf.id;
            mike = verify === options;
 156:
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            tango = romeo[tango];
            foxtrot = options.bind(oscar)(tango);
            yankee = foxtrot.useStateFromStores;
            tango = _closure1_slot7;
            offset = new Array(1);
            offset[0] = tango;
            verify = new Array(1);
            verify[0] = golf;
            tango = 14;
            tango = romeo[tango];
            tango = options.bind(oscar)(tango);
            backup = tango.areParticipantsEqual;
            sizing = function() {
                tango = _closure1_slot7;
                zulu = tango.getFilteredParticipants;
                mike = _closure2_slot0;
                entity = mike.id;
                zulu = zulu.bind(tango)(entity);
                entity = new Array(2);
                entity[0] = zulu;
                zulu = tango.getParticipantsVersion;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity[1] = mike;
                return entity;
            };
            result = foxtrot;
            output = offset;
            kilo = verify;
            verify = result[yankee](output, sizing, kilo, backup, foxtrot);
            options = _closure1_slot3;
            tango = 1;
            options = options.bind(oscar)(verify, tango);
            offset = 0;
            yankee = options[offset];
            verify = _closure1_slot1;
            options = 15;
            options = romeo[options];
            options = verify.bind(oscar)(options);
            options = options.bind(oscar)();
            _closure2_slot2 = options;
            verify = yankee.filter;
            options = function(argFoo) {
                _fun104188: for(var _fun104188_ip = 0; ; ) switch(_fun104188_ip) {
 0:
                    mike = argFoo;
                    entity = _closure1_slot11;
                    zulu = undefined;
                    entity = entity.bind(zulu)(mike);
                    if(!entity) { _fun104188_ip = 51; continue _fun104188 }
 20:
                    oscar = _closure2_slot2;
                    tango = null;
                    oscar = tango == oscar;
                    zulu = undefined;
                    if(oscar) { _fun104188_ip = 47; continue _fun104188 }
 38:
                    report = _closure2_slot2;
                    zulu = report.applicationId;
 47:
                    entity = tango != zulu;
 51:
                    if(!entity) { _fun104188_ip = 75; continue _fun104188 }
 54:
                    zulu = mike.applicationId;
                    mike = _closure2_slot2;
                    mike = mike.applicationId;
                    entity = zulu === mike;
 75:
                    entity = !entity;
                    return entity;
                }
            };
            yankee = verify.bind(yankee)(options);
            verify = yankee.filter;
            options = function(argFoo) {
                _fun104189: for(var _fun104189_ip = 0; ; ) switch(_fun104189_ip) {
 0:
                    mike = argFoo;
                    zulu = _closure1_slot10;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    if(!entity) { _fun104189_ip = 41; continue _fun104189 }
 20:
                    mike = mike.user;
                    zulu = mike.id;
                    mike = _closure2_slot1;
                    entity = zulu === mike;
 41:
                    entity = !entity;
                    return entity;
                }
            };
            yankee = verify.bind(yankee)(options);
            verify = yankee.length;
            options = 2;
            options = options !== verify;
            if(!options) { _fun104185_ip = 340; continue _fun104185 }
 328:
            romeo = yankee.length;
            verify = 3;
            options = verify !== romeo;
 340:
            verify = yankee;
            if(options) { _fun104185_ip = 363; continue _fun104185 }
 346:
            options = yankee.filter;
            report = function(argFoo) {
                _fun104190: for(var _fun104190_ip = 0; ; ) switch(_fun104190_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.id;
                    tango = entity.type;
                    entity = _closure2_slot1;
                    entity = zulu !== entity;
                    if(entity) { _fun104190_ip = 58; continue _fun104190 }
 27:
                    mike = _closure2_slot1;
                    mike = zulu === mike;
                    if(!mike) { _fun104190_ip = 55; continue _fun104190 }
 38:
                    zulu = _closure1_slot12;
                    zulu = zulu.USER;
                    mike = tango !== zulu;
 55:
                    entity = mike;
 58:
                    return entity;
                }
            };
            verify = options.bind(yankee)(report);
 363:
            entity = null;
            if(!mike) { _fun104185_ip = 508; continue _fun104185 }
 371:
            mike = verify.length;
            if(!(offset !== mike)) { _fun104185_ip = 469; continue _fun104185 }
 380:
            mike = verify.length;
            if(!(tango !== mike)) { _fun104185_ip = 416; continue _fun104185 }
 389:
            report = _closure1_slot13;
            tango = _closure1_slot22;
            mike = {};
            mike['channel'] = golf;
            mike['filteredParticipants'] = verify;
            mike = report.bind(oscar)(tango, mike);
            _fun104185_ip = 467; continue _fun104185;
 416:
            options = _closure1_slot13;
            report = _closure1_slot0;
            yankee = _closure1_slot2;
            tango = 17;
            tango = yankee[tango];
            tango = report.bind(oscar)(tango);
            report = tango.ChannelCallSingleController;
            tango = {};
            tango['channel'] = golf;
            verify = verify[offset];
            tango['selectedParticipant'] = verify;
            mike = options.bind(oscar)(report, tango);
 467:
            _fun104185_ip = 505; continue _fun104185;
 469:
            report = _closure1_slot13;
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 16;
            zulu = options[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = {};
            zulu['channel'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 505:
            entity = mike;
 508:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/native/components/ChannelCallVideoGrid.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();