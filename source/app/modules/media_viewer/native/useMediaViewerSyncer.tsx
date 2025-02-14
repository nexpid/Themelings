// app/modules/media_viewer/native/useMediaViewerSyncer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo, argBar, argBaz) { // Original name: makeMediaViewerSyncer
        _fun85420: for(var _fun85420_ip = 0; ; ) switch(_fun85420_ip) {
 0:
            tango = argFoo;
            entity = argBar;
            oscar = argBaz;
            var _closure2_slot0 = tango;
            var _closure2_slot1 = oscar;
            report = entity.selectedIndex;
            var _closure2_slot2 = report;
            zulu = entity.thumbnailsIndex;
            var _closure2_slot3 = zulu;
            zulu = entity.thumbnailsScrolling;
            var _closure2_slot4 = zulu;
            zulu = entity.thumbnailsAnimateTo;
            var _closure2_slot5 = zulu;
            zulu = entity.viewerPos;
            var _closure2_slot6 = zulu;
            zulu = entity.viewerScrolling;
            var _closure2_slot7 = zulu;
            zulu = entity.zoomed;
            var _closure2_slot8 = zulu;
            entity = entity.swipeSource;
            var _closure2_slot9 = entity;
            golf = oscar.length;
            entity = 0;
            if(!(golf > entity)) { _fun85420_ip = 128; continue _fun85420 }
 110:
            golf = oscar[entity];
            golf = golf.end;
            entity = oscar[entity];
            entity = entity.start;
 128:
            entity = {};
            entity['index'] = report;
            entity['sources'] = tango;
            entity['zoomed'] = zulu;
            zulu = function(argFoo, argBar) { // Original name: useThumbnailsProps
                entity = argFoo;
                vacuum = argBar;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = vacuum;
                sizing = _closure1_slot0;
                output = _closure1_slot2;
                verify = 3;
                tango = output[verify];
                kilo = undefined;
                report = sizing.bind(kilo)(tango);
                tango = report.useAnimatedRef;
                backup = tango.bind(report)();
                var _closure3_slot2 = backup;
                golf = _closure1_slot1;
                tango = 4;
                tango = output[tango];
                tango = golf.bind(kilo)(tango);
                tango = tango.bind(kilo)();
                report = tango.width;
                tango = tango.height;
                oscar = 5;
                oscar = output[oscar];
                oscar = golf.bind(kilo)(oscar);
                oscar = oscar.bind(kilo)();
                update = function() { // Original name: onSelectedIndexChange
                    _fun85422: for(var _fun85422_ip = 0; ; ) switch(_fun85422_ip) {
 0:
                        zulu = _closure2_slot9;
                        mike = zulu.get;
                        zulu = mike.bind(zulu)();
                        mike = 'thumbnails';
                        if(!(mike !== zulu)) { _fun85422_ip = 108; continue _fun85422 }
 26:
                        mike = _closure2_slot9;
                        entity = mike.get;
                        mike = entity.bind(mike)();
                        entity = 'viewer';
                        if(!(entity === mike)) { _fun85422_ip = 165; continue _fun85422 }
 49:
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        entity = 6;
                        mike = oscar[entity];
                        tango = undefined;
                        zulu = report.bind(tango)(mike);
                        mike = zulu.incrementMediaViewerAction;
                        entity = oscar[entity];
                        entity = report.bind(tango)(entity);
                        entity = entity.IncrementableMediaViewerActions;
                        entity = entity.VIEWER_SWIPE;
                        entity = mike.bind(zulu)(entity);
                        _fun85422_ip = 165; continue _fun85422;
 108:
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        entity = 6;
                        mike = oscar[entity];
                        tango = undefined;
                        zulu = report.bind(tango)(mike);
                        mike = zulu.incrementMediaViewerAction;
                        entity = oscar[entity];
                        entity = report.bind(tango)(entity);
                        entity = entity.IncrementableMediaViewerActions;
                        entity = entity.THUMBNAIL_SWIPE;
                        entity = mike.bind(zulu)(entity);
 165:
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        mike = 6;
                        zulu = oscar[mike];
                        entity = undefined;
                        tango = report.bind(entity)(zulu);
                        zulu = tango.incrementMediaViewerAction;
                        mike = oscar[mike];
                        mike = report.bind(entity)(mike);
                        mike = mike.IncrementableMediaViewerActions;
                        mike = mike.SELECTED_ITEM_CHANGE;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    }
                };
                var _closure3_slot3 = update;
                golf = output[verify];
                offset = sizing.bind(kilo)(golf);
                options = offset.useAnimatedScrollHandler;
                golf = {};
                yankee = function() { // Original name: C
                    tango = _closure2_slot4;
                    zulu = tango.set;
                    mike = tango.get;
                    report = mike.bind(tango)();
                    mike = _closure1_slot10;
                    mike = report | mike;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure2_slot9;
                    mike = zulu.set;
                    entity = 'thumbnails';
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                romeo = {};
                sequence = _closure2_slot4;
                romeo['thumbnailsScrolling'] = sequence;
                foxtrot = _closure1_slot10;
                romeo['SCROLLING_DRAG'] = foxtrot;
                foxtrot = _closure2_slot9;
                romeo['swipeSource'] = foxtrot;
                yankee['__closure'] = romeo;
                romeo = 16224520186325.0;
                yankee['__workletHash'] = romeo;
                romeo = _closure1_slot12;
                yankee['__initData'] = romeo;
                golf['onBeginDrag'] = yankee;
                yankee = function() { // Original name: P
                    zulu = _closure2_slot4;
                    mike = zulu.set;
                    entity = zulu.get;
                    tango = entity.bind(zulu)();
                    entity = -3;
                    entity = entity & tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                romeo = {};
                romeo['thumbnailsScrolling'] = sequence;
                echo = _closure1_slot10;
                romeo['SCROLLING_DRAG'] = echo;
                yankee['__closure'] = romeo;
                romeo = 5779899826871.0;
                yankee['__workletHash'] = romeo;
                romeo = _closure1_slot13;
                yankee['__initData'] = romeo;
                golf['onEndDrag'] = yankee;
                yankee = function(argFoo) { // Original name: V
                    _fun85425: for(var _fun85425_ip = 0; ; ) switch(_fun85425_ip) {
 0:
                        entity = argFoo;
                        entity = entity.contentOffset;
                        zulu = entity.x;
                        entity = _closure3_slot0;
                        yankee = zulu / entity;
                        tango = _closure2_slot9;
                        zulu = tango.get;
                        tango = zulu.bind(tango)();
                        zulu = 'thumbnails';
                        zulu = zulu === tango;
                        if(zulu) { _fun85425_ip = 107; continue _fun85425 }
 54:
                        tango = global;
                        oscar = tango.Math;
                        report = oscar.abs;
                        golf = tango.Math;
                        tango = golf.round;
                        tango = tango.bind(golf)(yankee);
                        tango = tango - yankee;
                        report = report.bind(oscar)(tango);
                        tango = 0.01;
                        zulu = report < tango;
 107:
                        if(!zulu) { _fun85425_ip = 182; continue _fun85425 }
 110:
                        report = _closure2_slot3;
                        tango = report.set;
                        zulu = global;
                        options = zulu.Math;
                        golf = options.max;
                        offset = zulu.Math;
                        verify = offset.min;
                        oscar = zulu.Math;
                        zulu = oscar.round;
                        oscar = zulu.bind(oscar)(yankee);
                        zulu = _closure3_slot1;
                        oscar = verify.bind(offset)(oscar, zulu);
                        zulu = 0;
                        zulu = golf.bind(options)(zulu, oscar);
                        zulu = tango.bind(report)(zulu);
 182:
                        tango = _closure2_slot5;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        report = 0;
                        if(!(!(zulu >= report))) { _fun85425_ip = 352; continue _fun85425 }
 204:
                        tango = _closure2_slot7;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        zulu = report !== zulu;
                        if(zulu) { _fun85425_ip = 241; continue _fun85425 }
 224:
                        oscar = _closure2_slot4;
                        tango = oscar.get;
                        tango = tango.bind(oscar)();
                        zulu = report !== tango;
 241:
                        if(!zulu) { _fun85425_ip = 274; continue _fun85425 }
 244:
                        report = _closure2_slot3;
                        tango = report.get;
                        report = tango.bind(report)();
                        oscar = _closure2_slot2;
                        tango = oscar.get;
                        tango = tango.bind(oscar)();
                        zulu = report !== tango;
 274:
                        if(!zulu) { _fun85425_ip = 429; continue _fun85425 }
 280:
                        report = _closure2_slot2;
                        tango = report.set;
                        oscar = _closure2_slot3;
                        zulu = oscar.get;
                        zulu = zulu.bind(oscar)();
                        zulu = tango.bind(report)(zulu);
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        zulu = 3;
                        tango = tango[zulu];
                        zulu = undefined;
                        report = report.bind(zulu)(tango);
                        tango = report.runOnJS;
                        mike = _closure3_slot3;
                        mike = tango.bind(report)(mike);
                        mike = mike.bind(zulu)();
                        _fun85425_ip = 429; continue _fun85425;
 352:
                        zulu = _closure2_slot3;
                        mike = zulu.get;
                        zulu = mike.bind(zulu)();
                        tango = _closure2_slot5;
                        mike = tango.get;
                        mike = mike.bind(tango)();
                        if(!(zulu === mike)) { _fun85425_ip = 429; continue _fun85425 }
 382:
                        tango = _closure2_slot5;
                        zulu = tango.set;
                        mike = -1;
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure2_slot2;
                        mike = zulu.set;
                        tango = _closure2_slot3;
                        entity = tango.get;
                        entity = entity.bind(tango)();
                        entity = mike.bind(zulu)(entity);
 429:
                        entity = undefined;
                        return entity;
                    }
                };
                romeo = {};
                source = false;
                romeo['variableWidthThumbnailsEnabled'] = source;
                echo = _closure2_slot1;
                romeo['thumbnailScrollPositions'] = echo;
                romeo['thumbnailSize'] = entity;
                romeo['swipeSource'] = foxtrot;
                control = _closure2_slot3;
                romeo['thumbnailsIndex'] = control;
                romeo['maxIndex'] = vacuum;
                config = _closure2_slot5;
                romeo['thumbnailsAnimateTo'] = config;
                vacuum = _closure2_slot2;
                romeo['selectedIndex'] = vacuum;
                vacuum = _closure2_slot7;
                romeo['viewerScrolling'] = vacuum;
                romeo['thumbnailsScrolling'] = sequence;
                record = output[verify];
                record = sizing.bind(kilo)(record);
                record = record.runOnJS;
                romeo['runOnJS'] = record;
                romeo['onSelectedIndexChange'] = update;
                yankee['__closure'] = romeo;
                romeo = 6907172845212.0;
                yankee['__workletHash'] = romeo;
                romeo = _closure1_slot14;
                yankee['__initData'] = romeo;
                golf['onScroll'] = yankee;
                yankee = function() { // Original name: H
                    tango = _closure2_slot4;
                    zulu = tango.set;
                    mike = tango.get;
                    report = mike.bind(tango)();
                    mike = _closure1_slot11;
                    mike = report | mike;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure2_slot9;
                    mike = zulu.set;
                    entity = 'thumbnails';
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                romeo = {};
                romeo['thumbnailsScrolling'] = sequence;
                update = _closure1_slot11;
                romeo['SCROLLING_MOMENTUM'] = update;
                romeo['swipeSource'] = foxtrot;
                yankee['__closure'] = romeo;
                romeo = 4138169755088.0;
                yankee['__workletHash'] = romeo;
                romeo = _closure1_slot15;
                yankee['__initData'] = romeo;
                golf['onMomentumBegin'] = yankee;
                yankee = function() { // Original name: D
                    zulu = _closure2_slot4;
                    mike = zulu.set;
                    entity = zulu.get;
                    tango = entity.bind(zulu)();
                    entity = -5;
                    entity = entity & tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                romeo = {};
                romeo['thumbnailsScrolling'] = sequence;
                foxtrot = _closure1_slot11;
                romeo['SCROLLING_MOMENTUM'] = foxtrot;
                yankee['__closure'] = romeo;
                romeo = 1471443652144.0;
                yankee['__workletHash'] = romeo;
                romeo = _closure1_slot16;
                yankee['__initData'] = romeo;
                golf['onMomentumEnd'] = yankee;
                options = options.bind(offset)(golf);
                romeo = _closure1_slot4;
                yankee = romeo.useCallback;
                offset = function(argFoo) {
                    _fun85428: for(var _fun85428_ip = 0; ; ) switch(_fun85428_ip) {
 0:
                        zulu = _closure2_slot8;
                        mike = zulu.get;
                        mike = mike.bind(zulu)();
                        if(mike) { _fun85428_ip = 56; continue _fun85428 }
 19:
                        tango = _closure2_slot5;
                        zulu = tango.set;
                        mike = argFoo;
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure2_slot9;
                        mike = zulu.set;
                        entity = 'thumbnails';
                        entity = mike.bind(zulu)(entity);
 56:
                        entity = undefined;
                        return entity;
                    }
                };
                golf = new Array(0);
                golf = yankee.bind(romeo)(offset, golf);
                foxtrot = _closure1_slot4;
                romeo = foxtrot.useCallback;
                yankee = new Array(1);
                yankee[0] = backup;
                offset = function(argFoo) {
                    mike = _closure2_slot1;
                    entity = argFoo;
                    entity = mike[entity];
                    offset = entity.scrollStart;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 3;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = zulu.bind(entity)(mike);
                    report = oscar.scrollTo;
                    yankee = _closure3_slot2;
                    verify = 0;
                    options = true;
                    romeo = oscar;
                    mike = romeo[report](yankee, offset, verify, options, golf);
                    return entity;
                };
                update = romeo.bind(foxtrot)(offset, yankee);
                offset = output[verify];
                romeo = sizing.bind(kilo)(offset);
                yankee = romeo.useDerivedValue;
                offset = function() { // Original name: y
                    _fun85430: for(var _fun85430_ip = 0; ; ) switch(_fun85430_ip) {
 0:
                        zulu = _closure2_slot5;
                        entity = zulu.get;
                        entity = entity.bind(zulu)();
                        oscar = 0;
                        if(!(!(entity < oscar))) { _fun85430_ip = 92; continue _fun85430 }
 22:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 3;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.scrollTo;
                        yankee = _closure3_slot2;
                        golf = _closure2_slot5;
                        mike = golf.get;
                        mike = mike.bind(golf)();
                        entity = _closure3_slot0;
                        offset = mike * entity;
                        options = true;
                        romeo = report;
                        verify = 0;
                        entity = romeo[tango](yankee, offset, verify, options, golf);
 92:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtrot = {};
                foxtrot['thumbnailsAnimateTo'] = config;
                foxtrot['variableWidthThumbnailsEnabled'] = source;
                config = output[verify];
                config = sizing.bind(kilo)(config);
                config = config.runOnJS;
                foxtrot['runOnJS'] = config;
                foxtrot['scrollVarWidthThumbnails'] = update;
                update = output[verify];
                update = sizing.bind(kilo)(update);
                update = update.scrollTo;
                foxtrot['scrollTo'] = update;
                foxtrot['ref'] = backup;
                foxtrot['thumbnailSize'] = entity;
                offset['__closure'] = foxtrot;
                foxtrot = 1697086875584.0;
                offset['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot17;
                offset['__initData'] = foxtrot;
                offset = yankee.bind(romeo)(offset);
                foxtrot = _closure1_slot4;
                romeo = foxtrot.useCallback;
                yankee = new Array(1);
                yankee[0] = backup;
                offset = function(argFoo) {
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 7;
                    mike = tango[entity];
                    entity = undefined;
                    golf = zulu.bind(entity)(mike);
                    oscar = golf.lerpVarWidthThumbnailScrollBounds;
                    report = _closure2_slot1;
                    mike = argFoo;
                    offset = oscar.bind(golf)(report, mike);
                    mike = 3;
                    mike = tango[mike];
                    oscar = zulu.bind(entity)(mike);
                    report = oscar.scrollTo;
                    yankee = _closure3_slot2;
                    verify = 0;
                    options = false;
                    romeo = oscar;
                    mike = romeo[report](yankee, offset, verify, options, golf);
                    return entity;
                };
                update = romeo.bind(foxtrot)(offset, yankee);
                offset = output[verify];
                romeo = sizing.bind(kilo)(offset);
                yankee = romeo.useDerivedValue;
                offset = function() { // Original name: ee
                    _fun85432: for(var _fun85432_ip = 0; ; ) switch(_fun85432_ip) {
 0:
                        zulu = _closure2_slot7;
                        entity = zulu.get;
                        entity = entity.bind(zulu)();
                        oscar = 0;
                        entity = oscar !== entity;
                        if(!entity) { _fun85432_ip = 55; continue _fun85432 }
 25:
                        tango = _closure2_slot3;
                        zulu = tango.get;
                        tango = zulu.bind(tango)();
                        report = _closure2_slot6;
                        zulu = report.get;
                        zulu = zulu.bind(report)();
                        entity = tango !== zulu;
 55:
                        if(!entity) { _fun85432_ip = 128; continue _fun85432 }
 58:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 3;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.scrollTo;
                        yankee = _closure3_slot2;
                        golf = _closure2_slot6;
                        mike = golf.get;
                        mike = mike.bind(golf)();
                        entity = _closure3_slot0;
                        offset = mike * entity;
                        options = false;
                        romeo = report;
                        verify = 0;
                        entity = romeo[tango](yankee, offset, verify, options, golf);
 128:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtrot = {};
                foxtrot['viewerScrolling'] = vacuum;
                foxtrot['thumbnailsIndex'] = control;
                control = _closure2_slot6;
                foxtrot['viewerPos'] = control;
                foxtrot['variableWidthThumbnailsEnabled'] = source;
                source = output[verify];
                source = sizing.bind(kilo)(source);
                source = source.runOnJS;
                foxtrot['runOnJS'] = source;
                foxtrot['lerpScrollVarWidthThumbnails'] = update;
                update = output[verify];
                update = sizing.bind(kilo)(update);
                update = update.scrollTo;
                foxtrot['scrollTo'] = update;
                foxtrot['ref'] = backup;
                foxtrot['thumbnailSize'] = entity;
                offset['__closure'] = foxtrot;
                foxtrot = 10477949154269.0;
                offset['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot18;
                offset['__initData'] = foxtrot;
                offset = yankee.bind(romeo)(offset);
                romeo = _closure2_slot0;
                yankee = romeo.map;
                offset = function(argFoo, argBar) {
                    entity = argBar;
                    return entity;
                };
                source = yankee.bind(romeo)(offset);
                var _closure3_slot4 = source;
                yankee = romeo.map;
                offset = function(argFoo) {
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 8;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.flattenSource;
                    mike = argFoo;
                    mike = zulu.bind(tango)(mike);
                    zulu = global;
                    report = zulu.Math;
                    tango = report.max;
                    golf = zulu.Math;
                    oscar = golf.min;
                    zulu = mike.width;
                    options = _closure1_slot6;
                    mike = mike.height;
                    mike = options / mike;
                    zulu = zulu * mike;
                    mike = _closure1_slot7;
                    zulu = oscar.bind(golf)(zulu, mike);
                    mike = _closure1_slot8;
                    mike = tango.bind(report)(zulu, mike);
                    entity = _closure1_slot8;
                    mike = mike - entity;
                    entity = 2;
                    entity = mike / entity;
                    return entity;
                };
                update = yankee.bind(romeo)(offset);
                var _closure3_slot5 = update;
                offset = output[verify];
                romeo = sizing.bind(kilo)(offset);
                yankee = romeo.useDerivedValue;
                offset = function() { // Original name: ie
                    _fun85435: for(var _fun85435_ip = 0; ; ) switch(_fun85435_ip) {
 0:
                        zulu = _closure2_slot4;
                        entity = zulu.get;
                        zulu = entity.bind(zulu)();
                        entity = 0;
                        zulu = zulu > entity;
                        if(zulu) { _fun85435_ip = 94; continue _fun85435 }
 25:
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        zulu = 3;
                        tango = tango[zulu];
                        zulu = undefined;
                        golf = report.bind(zulu)(tango);
                        oscar = golf.interpolate;
                        zulu = _closure2_slot6;
                        mike = zulu.get;
                        yankee = mike.bind(zulu)();
                        offset = _closure3_slot4;
                        verify = _closure3_slot5;
                        options = 'clamp';
                        romeo = golf;
                        mike = romeo[oscar](yankee, offset, verify, options, golf);
                        entity = -mike;
 94:
                        return entity;
                    }
                };
                foxtrot = {};
                foxtrot['thumbnailsScrolling'] = sequence;
                sequence = output[verify];
                sequence = sizing.bind(kilo)(sequence);
                sequence = sequence.interpolate;
                foxtrot['interpolate'] = sequence;
                foxtrot['viewerPos'] = control;
                foxtrot['interpolateInput'] = source;
                foxtrot['interpolateOutput'] = update;
                offset['__closure'] = foxtrot;
                foxtrot = 10097839523885.0;
                offset['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot19;
                offset['__initData'] = foxtrot;
                control = yankee.bind(romeo)(offset);
                var _closure3_slot6 = control;
                offset = report - entity;
                yankee = 2;
                romeo = offset / yankee;
                offset = oscar.left;
                romeo = romeo - offset;
                var _closure3_slot7 = romeo;
                offset = output[verify];
                update = sizing.bind(kilo)(offset);
                foxtrot = update.useAnimatedStyle;
                offset = function() { // Original name: ne
                    _fun85436: for(var _fun85436_ip = 0; ; ) switch(_fun85436_ip) {
 0:
                        entity = {};
                        zulu = _closure2_slot7;
                        mike = zulu.get;
                        zulu = mike.bind(zulu)();
                        mike = 0;
                        if(!(!(zulu > mike))) { _fun85436_ip = 95; continue _fun85436 }
 24:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 9;
                        zulu = zulu[mike];
                        mike = undefined;
                        report = tango.bind(mike)(zulu);
                        tango = report.withSpring;
                        zulu = _closure3_slot7;
                        oscar = _closure3_slot6;
                        mike = oscar.get;
                        mike = mike.bind(oscar)();
                        zulu = zulu + mike;
                        mike = {};
                        oscar = true;
                        mike['overshootClamping'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        _fun85436_ip = 119; continue _fun85436;
 95:
                        tango = _closure3_slot7;
                        report = _closure3_slot6;
                        zulu = report.get;
                        zulu = zulu.bind(report)();
                        mike = tango + zulu;
 119:
                        entity['width'] = mike;
                        return entity;
                    }
                };
                sequence = {};
                sequence['viewerScrolling'] = vacuum;
                sequence['headerBufferSize'] = romeo;
                sequence['margin'] = control;
                source = 9;
                config = output[source];
                config = sizing.bind(kilo)(config);
                config = config.withSpring;
                sequence['withSpring'] = config;
                offset['__closure'] = sequence;
                sequence = 11328769587377.0;
                offset['__workletHash'] = sequence;
                sequence = _closure1_slot20;
                offset['__initData'] = sequence;
                foxtrot = foxtrot.bind(update)(offset);
                update = echo.length;
                offset = 1;
                offset = update - offset;
                offset = echo[offset];
                offset = report - entity;
                offset = offset / yankee;
                oscar = oscar.right;
                offset = offset - oscar;
                var _closure3_slot8 = offset;
                oscar = output[verify];
                echo = sizing.bind(kilo)(oscar);
                yankee = echo.useAnimatedStyle;
                oscar = function() { // Original name: re
                    _fun85437: for(var _fun85437_ip = 0; ; ) switch(_fun85437_ip) {
 0:
                        entity = {};
                        zulu = _closure2_slot7;
                        mike = zulu.get;
                        zulu = mike.bind(zulu)();
                        mike = 0;
                        if(!(!(zulu > mike))) { _fun85437_ip = 95; continue _fun85437 }
 24:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 9;
                        zulu = zulu[mike];
                        mike = undefined;
                        report = tango.bind(mike)(zulu);
                        tango = report.withSpring;
                        zulu = _closure3_slot8;
                        oscar = _closure3_slot6;
                        mike = oscar.get;
                        mike = mike.bind(oscar)();
                        zulu = zulu + mike;
                        mike = {};
                        oscar = true;
                        mike['overshootClamping'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        _fun85437_ip = 119; continue _fun85437;
 95:
                        tango = _closure3_slot8;
                        report = _closure3_slot6;
                        zulu = report.get;
                        zulu = zulu.bind(report)();
                        mike = tango + zulu;
 119:
                        entity['width'] = mike;
                        return entity;
                    }
                };
                update = {};
                update['viewerScrolling'] = vacuum;
                update['footerBufferSize'] = offset;
                update['margin'] = control;
                source = output[source];
                source = sizing.bind(kilo)(source);
                source = source.withSpring;
                update['withSpring'] = source;
                oscar['__closure'] = update;
                update = 10532164558483.0;
                oscar['__workletHash'] = update;
                update = _closure1_slot21;
                oscar['__initData'] = update;
                yankee = yankee.bind(echo)(oscar);
                source = _closure1_slot4;
                update = source.useCallback;
                echo = function(argFoo, argBar) {
                    zulu = argFoo;
                    backup = argBar;
                    var _closure4_slot0 = backup;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    mike = 3;
                    report = offset[mike];
                    options = undefined;
                    golf = verify.bind(options)(report);
                    oscar = golf.useDerivedValue;
                    report = function() { // Original name: n
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 3;
                        mike = mike[entity];
                        entity = undefined;
                        oscar = zulu.bind(entity)(mike);
                        report = oscar.interpolate;
                        mike = _closure2_slot6;
                        entity = mike.get;
                        yankee = entity.bind(mike)();
                        mike = _closure4_slot0;
                        entity = 1;
                        golf = mike - entity;
                        zulu = new Array(3);
                        zulu[0] = golf;
                        zulu[1] = mike;
                        entity = mike + entity;
                        zulu[2] = entity;
                        verify = [0.4, 1, 0.4];
                        options = 'clamp';
                        romeo = oscar;
                        offset = zulu;
                        entity = romeo[report](yankee, offset, verify, options, golf);
                        return entity;
                    };
                    romeo = {};
                    yankee = offset[mike];
                    yankee = verify.bind(options)(yankee);
                    yankee = yankee.interpolate;
                    romeo['interpolate'] = yankee;
                    kilo = _closure2_slot6;
                    romeo['viewerPos'] = kilo;
                    romeo['index'] = backup;
                    report['__closure'] = romeo;
                    romeo = 5784737783661.0;
                    report['__workletHash'] = romeo;
                    romeo = _closure1_slot22;
                    report['__initData'] = romeo;
                    oscar = oscar.bind(golf)(report);
                    var _closure4_slot1 = oscar;
                    report = global;
                    romeo = report.Math;
                    golf = romeo.max;
                    sizing = report.Math;
                    foxtrot = sizing.min;
                    report = zulu.width;
                    output = _closure1_slot6;
                    zulu = zulu.height;
                    zulu = output / zulu;
                    report = report * zulu;
                    zulu = _closure1_slot7;
                    report = foxtrot.bind(sizing)(report, zulu);
                    zulu = _closure1_slot8;
                    foxtrot = golf.bind(romeo)(report, zulu);
                    var _closure4_slot2 = foxtrot;
                    zulu = offset[mike];
                    golf = verify.bind(options)(zulu);
                    report = golf.useDerivedValue;
                    zulu = function() { // Original name: l
                        _fun85440: for(var _fun85440_ip = 0; ; ) switch(_fun85440_ip) {
 0:
                            zulu = _closure2_slot4;
                            entity = zulu.get;
                            zulu = entity.bind(zulu)();
                            entity = 0;
                            if(!(!(zulu > entity))) { _fun85440_ip = 150; continue _fun85440 }
 25:
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            zulu = 3;
                            tango = tango[zulu];
                            zulu = undefined;
                            oscar = report.bind(zulu)(tango);
                            report = oscar.interpolate;
                            zulu = _closure2_slot6;
                            mike = zulu.get;
                            foxtrot = mike.bind(zulu)();
                            options = _closure4_slot0;
                            mike = 1;
                            verify = options - mike;
                            zulu = new Array(3);
                            zulu[0] = verify;
                            zulu[1] = options;
                            mike = options + mike;
                            zulu[2] = mike;
                            options = _closure1_slot8;
                            mike = new Array(3);
                            mike[0] = options;
                            golf = _closure4_slot2;
                            mike[1] = golf;
                            entity = _closure1_slot8;
                            mike[2] = entity;
                            offset = 'clamp';
                            backup = oscar;
                            romeo = zulu;
                            yankee = mike;
                            entity = backup[report](foxtrot, romeo, yankee, offset, verify);
                            _fun85440_ip = 157; continue _fun85440;
 150:
                            entity = _closure1_slot8;
 157:
                            return entity;
                        }
                    };
                    romeo = {};
                    sizing = _closure2_slot4;
                    romeo['thumbnailsScrolling'] = sizing;
                    sizing = _closure1_slot8;
                    romeo['THUMBNAIL_MIN_WIDTH'] = sizing;
                    sizing = offset[mike];
                    sizing = verify.bind(options)(sizing);
                    sizing = sizing.interpolate;
                    romeo['interpolate'] = sizing;
                    romeo['viewerPos'] = kilo;
                    romeo['index'] = backup;
                    romeo['sourceWidth'] = foxtrot;
                    zulu['__closure'] = romeo;
                    romeo = 12440745987072.0;
                    zulu['__workletHash'] = romeo;
                    romeo = _closure1_slot23;
                    zulu['__initData'] = romeo;
                    golf = report.bind(golf)(zulu);
                    var _closure4_slot3 = golf;
                    mike = offset[mike];
                    zulu = verify.bind(options)(mike);
                    mike = zulu.useAnimatedStyle;
                    entity = function() { // Original name: c
                        _fun85441: for(var _fun85441_ip = 0; ; ) switch(_fun85441_ip) {
 0:
                            entity = {};
                            zulu = _closure2_slot7;
                            mike = zulu.get;
                            zulu = mike.bind(zulu)();
                            mike = 0;
                            if(!(!(zulu > mike))) { _fun85441_ip = 87; continue _fun85441 }
 24:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 9;
                            zulu = zulu[mike];
                            mike = undefined;
                            report = tango.bind(mike)(zulu);
                            tango = report.withSpring;
                            zulu = _closure4_slot3;
                            mike = zulu.get;
                            zulu = mike.bind(zulu)();
                            mike = {};
                            oscar = true;
                            mike['overshootClamping'] = oscar;
                            mike = tango.bind(report)(zulu, mike);
                            _fun85441_ip = 103; continue _fun85441;
 87:
                            tango = _closure4_slot3;
                            zulu = tango.get;
                            mike = zulu.bind(tango)();
 103:
                            entity['width'] = mike;
                            mike = _closure1_slot6;
                            entity['height'] = mike;
                            zulu = _closure4_slot1;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            entity['opacity'] = mike;
                            return entity;
                        }
                    };
                    report = {};
                    yankee = _closure2_slot7;
                    report['viewerScrolling'] = yankee;
                    report['_width'] = golf;
                    golf = 9;
                    golf = offset[golf];
                    golf = verify.bind(options)(golf);
                    golf = golf.withSpring;
                    report['withSpring'] = golf;
                    golf = _closure1_slot6;
                    report['THUMBNAIL_HEIGHT'] = golf;
                    report['opacity'] = oscar;
                    entity['__closure'] = report;
                    report = 513826663139.0;
                    entity['__workletHash'] = report;
                    tango = _closure1_slot24;
                    entity['__initData'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                oscar = new Array(0);
                oscar = update.bind(source)(echo, oscar);
                verify = output[verify];
                sizing = sizing.bind(kilo)(verify);
                kilo = sizing.useDerivedValue;
                verify = function() { // Original name: le
                    mike = _closure2_slot8;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    entity = !entity;
                    return entity;
                };
                output = {};
                result = _closure2_slot8;
                output['zoomed'] = result;
                verify['__closure'] = output;
                output = 7667674289153.0;
                verify['__workletHash'] = output;
                output = _closure1_slot25;
                verify['__initData'] = output;
                verify = kilo.bind(sizing)(verify);
                sizing = _closure1_slot4;
                kilo = sizing.useMemo;
                mike = new Array(1);
                mike[0] = entity;
                entity = function() {
                    _fun85443: for(var _fun85443_ip = 0; ; ) switch(_fun85443_ip) {
 0:
                        entity = new Array(0);
                        mike = _closure2_slot1;
                        mike = mike.length;
                        tango = 0;
                        mike = tango < mike;
                        if(!mike) { _fun85443_ip = 62; continue _fun85443 }
 28:
                        oscar = entity.push;
                        mike = _closure3_slot0;
                        mike = tango * mike;
                        mike = oscar.bind(entity)(mike);
                        tango = tango + 1;
                        mike = _closure2_slot1;
                        mike = mike.length;
                        if(tango < mike) { _fun85443_ip = 28; continue _fun85443 }
 62:
                        return entity;
                    }
                };
                mike = kilo.bind(sizing)(entity, mike);
                entity = {};
                entity['ref'] = backup;
                entity['headerBufferStyle'] = foxtrot;
                entity['headerBufferSize'] = romeo;
                entity['footerBufferStyle'] = yankee;
                entity['footerBufferSize'] = offset;
                entity['scrollEnabled'] = verify;
                entity['onScroll'] = options;
                entity['onSelect'] = golf;
                entity['useThumbnailStyle'] = oscar;
                entity['screenWidth'] = report;
                entity['screenHeight'] = tango;
                zulu = function(argFoo, argBar) { // Original name: itemSize
                    entity = _closure1_slot9;
                    return entity;
                };
                entity['itemSize'] = zulu;
                entity['snapToOffsets'] = mike;
                return entity;
            };
            entity['useThumbnailsProps'] = zulu;
            mike = function() { // Original name: useViewerProps
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                zulu = 3;
                tango = yankee[zulu];
                options = undefined;
                report = verify.bind(options)(tango);
                tango = report.useAnimatedRef;
                report = tango.bind(report)();
                var _closure3_slot0 = report;
                oscar = _closure1_slot1;
                tango = 4;
                tango = yankee[tango];
                tango = oscar.bind(options)(tango);
                tango = tango.bind(options)();
                offset = tango.width;
                var _closure3_slot1 = offset;
                oscar = tango.height;
                var _closure3_slot2 = oscar;
                tango = yankee[zulu];
                romeo = verify.bind(options)(tango);
                golf = romeo.useDerivedValue;
                tango = function() { // Original name: n
                    _fun85446: for(var _fun85446_ip = 0; ; ) switch(_fun85446_ip) {
 0:
                        zulu = _closure2_slot5;
                        entity = zulu.get;
                        zulu = entity.bind(zulu)();
                        entity = -1;
                        if(!(entity !== zulu)) { _fun85446_ip = 96; continue _fun85446 }
 26:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 3;
                        zulu = zulu[entity];
                        entity = undefined;
                        oscar = tango.bind(entity)(zulu);
                        report = oscar.scrollTo;
                        offset = _closure3_slot0;
                        zulu = _closure2_slot5;
                        mike = zulu.get;
                        mike = mike.bind(zulu)();
                        entity = _closure3_slot1;
                        verify = mike * entity;
                        options = 0;
                        golf = false;
                        yankee = oscar;
                        entity = yankee[report](offset, verify, options, golf, oscar);
 96:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtrot = {};
                output = _closure2_slot5;
                foxtrot['thumbnailsAnimateTo'] = output;
                backup = yankee[zulu];
                backup = verify.bind(options)(backup);
                backup = backup.scrollTo;
                foxtrot['scrollTo'] = backup;
                foxtrot['ref'] = report;
                foxtrot['screenWidth'] = offset;
                tango['__closure'] = foxtrot;
                foxtrot = 11860326453239.0;
                tango['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot26;
                tango['__initData'] = foxtrot;
                tango = golf.bind(romeo)(tango);
                tango = yankee[zulu];
                romeo = verify.bind(options)(tango);
                golf = romeo.useDerivedValue;
                tango = function() { // Original name: l
                    _fun85447: for(var _fun85447_ip = 0; ; ) switch(_fun85447_ip) {
 0:
                        zulu = _closure2_slot4;
                        entity = zulu.get;
                        entity = entity.bind(zulu)();
                        oscar = 0;
                        entity = oscar === entity;
                        if(entity) { _fun85447_ip = 42; continue _fun85447 }
 25:
                        tango = _closure2_slot7;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        entity = zulu > oscar;
 42:
                        if(entity) { _fun85447_ip = 115; continue _fun85447 }
 45:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 3;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.scrollTo;
                        yankee = _closure3_slot0;
                        golf = _closure2_slot3;
                        mike = golf.get;
                        mike = mike.bind(golf)();
                        entity = _closure3_slot1;
                        offset = mike * entity;
                        options = false;
                        romeo = report;
                        verify = 0;
                        entity = romeo[tango](yankee, offset, verify, options, golf);
 115:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtrot = {};
                result = _closure2_slot4;
                foxtrot['thumbnailsScrolling'] = result;
                backup = _closure2_slot7;
                foxtrot['viewerScrolling'] = backup;
                kilo = yankee[zulu];
                kilo = verify.bind(options)(kilo);
                kilo = kilo.scrollTo;
                foxtrot['scrollTo'] = kilo;
                foxtrot['ref'] = report;
                kilo = _closure2_slot3;
                foxtrot['thumbnailsIndex'] = kilo;
                foxtrot['screenWidth'] = offset;
                tango['__closure'] = foxtrot;
                foxtrot = 6332404461490.0;
                tango['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot27;
                tango['__initData'] = foxtrot;
                tango = golf.bind(romeo)(tango);
                zulu = yankee[zulu];
                golf = verify.bind(options)(zulu);
                tango = golf.useAnimatedScrollHandler;
                zulu = {};
                romeo = function() { // Original name: M
                    tango = _closure2_slot7;
                    zulu = tango.set;
                    mike = tango.get;
                    report = mike.bind(tango)();
                    mike = _closure1_slot10;
                    mike = report | mike;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure2_slot9;
                    mike = zulu.set;
                    entity = 'viewer';
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtrot = {};
                foxtrot['viewerScrolling'] = backup;
                kilo = _closure1_slot10;
                foxtrot['SCROLLING_DRAG'] = kilo;
                kilo = _closure2_slot9;
                foxtrot['swipeSource'] = kilo;
                romeo['__closure'] = foxtrot;
                foxtrot = 1082965969005.0;
                romeo['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot28;
                romeo['__initData'] = foxtrot;
                zulu['onBeginDrag'] = romeo;
                romeo = function() { // Original name: f
                    zulu = _closure2_slot7;
                    mike = zulu.set;
                    entity = zulu.get;
                    tango = entity.bind(zulu)();
                    entity = -3;
                    entity = entity & tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtrot = {};
                foxtrot['viewerScrolling'] = backup;
                echo = _closure1_slot10;
                foxtrot['SCROLLING_DRAG'] = echo;
                romeo['__closure'] = foxtrot;
                foxtrot = 1722948238280.0;
                romeo['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot29;
                romeo['__initData'] = foxtrot;
                zulu['onEndDrag'] = romeo;
                romeo = function(argFoo) { // Original name: b
                    _fun85450: for(var _fun85450_ip = 0; ; ) switch(_fun85450_ip) {
 0:
                        zulu = _closure2_slot7;
                        mike = zulu.get;
                        mike = mike.bind(zulu)();
                        tango = 0;
                        mike = tango === mike;
                        if(!mike) { _fun85450_ip = 42; continue _fun85450 }
 25:
                        report = _closure2_slot4;
                        zulu = report.get;
                        zulu = zulu.bind(report)();
                        mike = tango === zulu;
 42:
                        if(!mike) { _fun85450_ip = 68; continue _fun85450 }
 45:
                        tango = _closure2_slot5;
                        zulu = tango.get;
                        tango = zulu.bind(tango)();
                        zulu = -1;
                        mike = zulu === tango;
 68:
                        if(mike) { _fun85450_ip = 110; continue _fun85450 }
 71:
                        zulu = _closure2_slot6;
                        mike = zulu.set;
                        entity = argFoo;
                        entity = entity.contentOffset;
                        tango = entity.x;
                        entity = _closure3_slot1;
                        entity = tango / entity;
                        entity = mike.bind(zulu)(entity);
 110:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtrot = {};
                foxtrot['viewerScrolling'] = backup;
                foxtrot['thumbnailsScrolling'] = result;
                foxtrot['thumbnailsAnimateTo'] = output;
                sizing = _closure2_slot6;
                foxtrot['viewerPos'] = sizing;
                foxtrot['screenWidth'] = offset;
                romeo['__closure'] = foxtrot;
                foxtrot = 2738090250956.0;
                romeo['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot30;
                romeo['__initData'] = foxtrot;
                zulu['onScroll'] = romeo;
                romeo = function() { // Original name: w
                    tango = _closure2_slot7;
                    zulu = tango.set;
                    mike = tango.get;
                    report = mike.bind(tango)();
                    mike = _closure1_slot11;
                    mike = report | mike;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure2_slot9;
                    mike = zulu.set;
                    entity = 'viewer';
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtrot = {};
                foxtrot['viewerScrolling'] = backup;
                sizing = _closure1_slot11;
                foxtrot['SCROLLING_MOMENTUM'] = sizing;
                foxtrot['swipeSource'] = kilo;
                romeo['__closure'] = foxtrot;
                foxtrot = 16635271467463.0;
                romeo['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot31;
                romeo['__initData'] = foxtrot;
                zulu['onMomentumBegin'] = romeo;
                romeo = function() { // Original name: S
                    zulu = _closure2_slot7;
                    mike = zulu.set;
                    entity = zulu.get;
                    tango = entity.bind(zulu)();
                    entity = -5;
                    entity = entity & tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtrot = {};
                foxtrot['viewerScrolling'] = backup;
                backup = _closure1_slot11;
                foxtrot['SCROLLING_MOMENTUM'] = backup;
                romeo['__closure'] = foxtrot;
                foxtrot = 8806989101472.0;
                romeo['__workletHash'] = foxtrot;
                foxtrot = _closure1_slot32;
                romeo['__initData'] = foxtrot;
                zulu['onMomentumEnd'] = romeo;
                tango = tango.bind(golf)(zulu);
                zulu = 10;
                golf = yankee[zulu];
                romeo = verify.bind(options)(golf);
                golf = romeo.useOrientation;
                golf = golf.bind(romeo)();
                zulu = yankee[zulu];
                zulu = verify.bind(options)(zulu);
                zulu = zulu.OrientationType;
                zulu = zulu.LANDSCAPE;
                zulu = golf === zulu;
                var _closure3_slot3 = zulu;
                verify = _closure1_slot4;
                options = verify.useCallback;
                golf = new Array(4);
                golf[0] = report;
                golf[1] = zulu;
                golf[2] = offset;
                golf[3] = oscar;
                zulu = function() {
                    _fun85453: for(var _fun85453_ip = 0; ; ) switch(_fun85453_ip) {
 0:
                        mike = _closure3_slot3;
                        zulu = global;
                        oscar = zulu.Math;
                        if(mike) { _fun85453_ip = 39; continue _fun85453 }
 18:
                        tango = oscar.min;
                        zulu = _closure3_slot1;
                        mike = _closure3_slot2;
                        zulu = tango.bind(oscar)(zulu, mike);
                        _fun85453_ip = 58; continue _fun85453;
 39:
                        report = oscar.max;
                        tango = _closure3_slot1;
                        mike = _closure3_slot2;
                        zulu = report.bind(oscar)(tango, mike);
 58:
                        tango = _closure2_slot2;
                        mike = tango.get;
                        mike = mike.bind(tango)();
                        tango = mike * zulu;
                        entity = _closure3_slot0;
                        zulu = entity.current;
                        entity = null;
                        if(!(entity != zulu)) { _fun85453_ip = 107; continue _fun85453 }
 93:
                        mike = zulu.scrollTo;
                        entity = false;
                        entity = mike.bind(zulu)(tango, entity);
 107:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = options.bind(verify)(zulu, golf);
                verify = _closure1_slot4;
                options = verify.useEffect;
                golf = new Array(3);
                golf[0] = offset;
                golf[1] = oscar;
                golf[2] = report;
                oscar = function() {
                    _fun85454: for(var _fun85454_ip = 0; ; ) switch(_fun85454_ip) {
 0:
                        entity = _closure3_slot0;
                        mike = entity.current;
                        entity = null;
                        if(!(entity != mike)) { _fun85454_ip = 28; continue _fun85454 }
 18:
                        entity = mike.reset;
                        entity = entity.bind(mike)();
 28:
                        entity = undefined;
                        return entity;
                    }
                };
                oscar = options.bind(verify)(oscar, golf);
                golf = _closure1_slot4;
                oscar = golf.useCallback;
                mike = function(argFoo) {
                    backup = argFoo;
                    var _closure4_slot0 = backup;
                    tango = _closure1_slot4;
                    zulu = tango.useState;
                    foxtrot = _closure2_slot2;
                    entity = foxtrot.get;
                    entity = entity.bind(foxtrot)();
                    entity = backup === entity;
                    tango = zulu.bind(tango)(entity);
                    zulu = _closure1_slot3;
                    yankee = undefined;
                    entity = 2;
                    tango = zulu.bind(yankee)(tango, entity);
                    entity = 0;
                    entity = tango[entity];
                    zulu = 1;
                    options = tango[zulu];
                    var _closure4_slot1 = options;
                    offset = _closure1_slot0;
                    romeo = _closure1_slot2;
                    verify = 3;
                    zulu = romeo[verify];
                    report = offset.bind(yankee)(zulu);
                    tango = report.useAnimatedReaction;
                    zulu = function() { // Original name: o
                        mike = _closure4_slot0;
                        zulu = _closure2_slot2;
                        entity = zulu.get;
                        entity = entity.bind(zulu)();
                        entity = mike === entity;
                        return entity;
                    };
                    golf = {};
                    golf['index'] = backup;
                    golf['selectedIndex'] = foxtrot;
                    zulu['__closure'] = golf;
                    golf = 16460720517812.0;
                    zulu['__workletHash'] = golf;
                    golf = _closure1_slot33;
                    zulu['__initData'] = golf;
                    mike = function(argFoo, argBar) { // Original name: l
                        _fun85457: for(var _fun85457_ip = 0; ; ) switch(_fun85457_ip) {
 0:
                            zulu = argFoo;
                            mike = argBar;
                            entity = null;
                            entity = entity != mike;
                            if(!entity) { _fun85457_ip = 19; continue _fun85457 }
 15:
                            entity = mike !== zulu;
 19:
                            if(!entity) { _fun85457_ip = 69; continue _fun85457 }
 22:
                            tango = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 3;
                            entity = mike[entity];
                            mike = undefined;
                            report = tango.bind(mike)(entity);
                            tango = report.runOnJS;
                            entity = _closure4_slot1;
                            entity = tango.bind(report)(entity);
                            entity = entity.bind(mike)(zulu);
 69:
                            entity = undefined;
                            return entity;
                        }
                    };
                    golf = {};
                    verify = romeo[verify];
                    verify = offset.bind(yankee)(verify);
                    verify = verify.runOnJS;
                    golf['runOnJS'] = verify;
                    golf['setVisible'] = options;
                    mike['__closure'] = golf;
                    golf = 2991686939184.0;
                    mike['__workletHash'] = golf;
                    oscar = _closure1_slot34;
                    mike['__initData'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                entity = new Array(0);
                mike = oscar.bind(golf)(mike, entity);
                entity = {};
                entity['ref'] = report;
                entity['onScroll'] = tango;
                entity['onContentSizeChange'] = zulu;
                entity['useItemVisible'] = mike;
                return entity;
            };
            entity['useViewerProps'] = mike;
            return entity;
        }
    };
    var _closure1_slot35 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    options = golf[report];
    report = argCorge;
    report = report.bind(entity)(options);
    var _closure1_slot4 = report;
    report = 2;
    options = golf[report];
    options = oscar.bind(entity)(options);
    verify = options.THUMBNAIL_MARGIN;
    var _closure1_slot5 = verify;
    verify = options.THUMBNAIL_HEIGHT;
    var _closure1_slot6 = verify;
    verify = options.THUMBNAIL_MAX_WIDTH;
    var _closure1_slot7 = verify;
    verify = options.THUMBNAIL_MIN_WIDTH;
    var _closure1_slot8 = verify;
    options = options.THUMBNAIL_WIDTH_MARGIN;
    var _closure1_slot9 = options;
    var _closure1_slot10 = report;
    report = 4;
    var _closure1_slot11 = report;
    report = {};
    options = "function useMediaViewerSyncerTsx1(){const{thumbnailsScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');}";
    report['code'] = options;
    var _closure1_slot12 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx2(){const{thumbnailsScrolling,SCROLLING_DRAG}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);}';
    report['code'] = options;
    var _closure1_slot13 = report;
    report = {};
    options = "function useMediaViewerSyncerTsx3(event){const{variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,thumbnailsIndex,maxIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,runOnJS,onSelectedIndexChange}=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){thumbnailsIndex.set(Math.max(0,Math.min(Math.round(thumbnails),maxIndex)));}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());runOnJS(onSelectedIndexChange)();}}";
    report['code'] = options;
    var _closure1_slot14 = report;
    report = {};
    options = "function useMediaViewerSyncerTsx4(){const{thumbnailsScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('thumbnails');}";
    report['code'] = options;
    var _closure1_slot15 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx5(){const{thumbnailsScrolling,SCROLLING_MOMENTUM}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_MOMENTUM);}';
    report['code'] = options;
    var _closure1_slot16 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx6(){const{thumbnailsAnimateTo,variableWidthThumbnailsEnabled,runOnJS,scrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(thumbnailsAnimateTo.get()<0)return;if(variableWidthThumbnailsEnabled){runOnJS(scrollVarWidthThumbnails)(thumbnailsAnimateTo.get());}else{scrollTo(ref,thumbnailsAnimateTo.get()*thumbnailSize,0,true);}}';
    report['code'] = options;
    var _closure1_slot17 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx7(){const{viewerScrolling,thumbnailsIndex,viewerPos,variableWidthThumbnailsEnabled,runOnJS,lerpScrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(viewerScrolling.get()===0)return;else if(thumbnailsIndex.get()!==viewerPos.get()){if(variableWidthThumbnailsEnabled){runOnJS(lerpScrollVarWidthThumbnails)(viewerPos.get());}else{scrollTo(ref,viewerPos.get()*thumbnailSize,0,false);}}}';
    report['code'] = options;
    var _closure1_slot18 = report;
    report = {};
    options = "function useMediaViewerSyncerTsx8(){const{thumbnailsScrolling,interpolate,viewerPos,interpolateInput,interpolateOutput}=this.__closure;return thumbnailsScrolling.get()>0?0:-interpolate(viewerPos.get(),interpolateInput,interpolateOutput,'clamp');}";
    report['code'] = options;
    var _closure1_slot19 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx9(){const{viewerScrolling,headerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?headerBufferSize+margin.get():withSpring(headerBufferSize+margin.get(),{overshootClamping:true})};}';
    report['code'] = options;
    var _closure1_slot20 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx10(){const{viewerScrolling,footerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?footerBufferSize+margin.get():withSpring(footerBufferSize+margin.get(),{overshootClamping:true})};}';
    report['code'] = options;
    var _closure1_slot21 = report;
    report = {};
    options = "function useMediaViewerSyncerTsx11(){const{interpolate,viewerPos,index}=this.__closure;return interpolate(viewerPos.get(),[index-1,index,index+1],[0.4,1,0.4],'clamp');}";
    report['code'] = options;
    var _closure1_slot22 = report;
    report = {};
    options = "function useMediaViewerSyncerTsx13(){const{thumbnailsScrolling,THUMBNAIL_MIN_WIDTH,interpolate,viewerPos,index,sourceWidth}=this.__closure;return thumbnailsScrolling.get()>0?THUMBNAIL_MIN_WIDTH:interpolate(viewerPos.get(),[index-1,index,index+1],[THUMBNAIL_MIN_WIDTH,sourceWidth,THUMBNAIL_MIN_WIDTH],'clamp');}";
    report['code'] = options;
    var _closure1_slot23 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx14(){const{viewerScrolling,_width,withSpring,THUMBNAIL_HEIGHT,opacity}=this.__closure;return{width:viewerScrolling.get()>0?_width.get():withSpring(_width.get(),{overshootClamping:true}),height:THUMBNAIL_HEIGHT,opacity:opacity.get()};}';
    report['code'] = options;
    var _closure1_slot24 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx15(){const{zoomed}=this.__closure;return!zoomed.get();}';
    report['code'] = options;
    var _closure1_slot25 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx16(){const{thumbnailsAnimateTo,scrollTo,ref,screenWidth}=this.__closure;if(thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);}';
    report['code'] = options;
    var _closure1_slot26 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx17(){const{thumbnailsScrolling,viewerScrolling,scrollTo,ref,thumbnailsIndex,screenWidth}=this.__closure;if(thumbnailsScrolling.get()===0||viewerScrolling.get()>0)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);}';
    report['code'] = options;
    var _closure1_slot27 = report;
    report = {};
    options = "function useMediaViewerSyncerTsx18(){const{viewerScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');}";
    report['code'] = options;
    var _closure1_slot28 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx19(){const{viewerScrolling,SCROLLING_DRAG}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);}';
    report['code'] = options;
    var _closure1_slot29 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx20(event){const{viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,viewerPos,screenWidth}=this.__closure;if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;viewerPos.set(event.contentOffset.x/screenWidth);}';
    report['code'] = options;
    var _closure1_slot30 = report;
    report = {};
    options = "function useMediaViewerSyncerTsx21(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}";
    report['code'] = options;
    var _closure1_slot31 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}';
    report['code'] = options;
    var _closure1_slot32 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx23(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}';
    report['code'] = options;
    var _closure1_slot33 = report;
    report = {};
    options = 'function useMediaViewerSyncerTsx24(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}';
    report['code'] = options;
    var _closure1_slot34 = report;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/media_viewer/native/useMediaViewerSyncer.tsx';
    report = oscar.bind(golf)(report);
    zulu['makeMediaViewerSyncer'] = tango;
    mike = function(argFoo, argBar) { // Original name: useMediaViewerSyncer
        oscar = argFoo;
        zulu = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = zulu;
        golf = _closure1_slot4;
        report = golf.useMemo;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            verify = _closure2_slot1;
            entity = {};
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 3;
            oscar = report[mike];
            tango = undefined;
            golf = zulu.bind(tango)(oscar);
            oscar = golf.makeMutable;
            oscar = oscar.bind(golf)(verify);
            entity['selectedIndex'] = oscar;
            oscar = report[mike];
            golf = zulu.bind(tango)(oscar);
            oscar = golf.makeMutable;
            oscar = oscar.bind(golf)(verify);
            entity['thumbnailsIndex'] = oscar;
            oscar = report[mike];
            golf = zulu.bind(tango)(oscar);
            oscar = golf.makeMutable;
            options = 0;
            oscar = oscar.bind(golf)(options);
            entity['thumbnailsScrolling'] = oscar;
            oscar = report[mike];
            offset = zulu.bind(tango)(oscar);
            golf = offset.makeMutable;
            oscar = -1;
            oscar = golf.bind(offset)(oscar);
            entity['thumbnailsAnimateTo'] = oscar;
            oscar = report[mike];
            golf = zulu.bind(tango)(oscar);
            oscar = golf.makeMutable;
            oscar = oscar.bind(golf)(verify);
            entity['viewerPos'] = oscar;
            oscar = report[mike];
            golf = zulu.bind(tango)(oscar);
            oscar = golf.makeMutable;
            oscar = oscar.bind(golf)(options);
            entity['viewerScrolling'] = oscar;
            oscar = report[mike];
            options = zulu.bind(tango)(oscar);
            golf = options.makeMutable;
            oscar = false;
            oscar = golf.bind(options)(oscar);
            entity['zoomed'] = oscar;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.makeMutable;
            mike = mike.bind(zulu)(tango);
            entity['swipeSource'] = mike;
            return entity;
        };
        report = report.bind(golf)(zulu, tango);
        var _closure2_slot2 = report;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun85460: for(var _fun85460_ip = 0; ; ) switch(_fun85460_ip) {
 0:
                report = _closure2_slot0;
                tango = new Array(0);
                mike = report.length;
                romeo = 0;
                oscar = romeo < mike;
                yankee = global;
                offset = 2;
                verify = 8;
                zulu = undefined;
                options = 0;
                golf = 0;
                if(!oscar) { _fun85460_ip = 261; continue _fun85460 }
 45:
                foxtrot = _closure1_slot0;
                oscar = _closure1_slot2;
                oscar = oscar[verify];
                backup = foxtrot.bind(zulu)(oscar);
                foxtrot = backup.flattenSource;
                oscar = report[golf];
                oscar = foxtrot.bind(backup)(oscar);
                kilo = yankee.Math;
                backup = kilo.max;
                output = yankee.Math;
                sizing = output.min;
                foxtrot = oscar.width;
                result = _closure1_slot6;
                oscar = oscar.height;
                oscar = result / oscar;
                foxtrot = foxtrot * oscar;
                oscar = _closure1_slot7;
                foxtrot = sizing.bind(output)(foxtrot, oscar);
                oscar = _closure1_slot8;
                foxtrot = backup.bind(kilo)(foxtrot, oscar);
                oscar = _closure1_slot5;
                oscar = offset * oscar;
                oscar = foxtrot + oscar;
                foxtrot = options + oscar;
                kilo = 0;
                if(!(kilo !== golf)) { _fun85460_ip = 218; continue _fun85460 }
 163:
                sizing = yankee.Math;
                backup = sizing.floor;
                oscar = tango[romeo];
                output = oscar.end;
                oscar = tango[romeo];
                oscar = oscar.start;
                output = output - oscar;
                oscar = foxtrot - options;
                oscar = oscar - output;
                oscar = oscar / offset;
                oscar = options + oscar;
                kilo = backup.bind(sizing)(oscar);
 218:
                backup = tango.push;
                oscar = {};
                oscar['start'] = options;
                oscar['end'] = foxtrot;
                oscar['scrollStart'] = kilo;
                oscar = backup.bind(tango)(oscar);
                golf = golf + 1;
                oscar = report.length;
                options = foxtrot;
                if(golf < oscar) { _fun85460_ip = 45; continue _fun85460 }
 261:
                mike = _closure1_slot35;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(report, entity, tango);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useMediaViewerSyncer'] = mike;
    return entity;
})();