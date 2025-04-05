// app/modules/media_viewer/native/useMediaViewerSyncer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo, argBar, argBaz) { // Original name: makeMediaViewerSyncer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            oscard = argBaz;
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = oscard;
            report = entity.selectedIndex;
            var _closure2_slot2 = report;
            zuuluu = entity.thumbnailsIndex;
            var _closure2_slot3 = zuuluu;
            zuuluu = entity.thumbnailsScrolling;
            var _closure2_slot4 = zuuluu;
            zuuluu = entity.thumbnailsAnimateTo;
            var _closure2_slot5 = zuuluu;
            zuuluu = entity.viewerPos;
            var _closure2_slot6 = zuuluu;
            zuuluu = entity.viewerScrolling;
            var _closure2_slot7 = zuuluu;
            zuuluu = entity.zoomed;
            var _closure2_slot8 = zuuluu;
            entity = entity.swipeSource;
            var _closure2_slot9 = entity;
            golfie = oscard.length;
            entity = 0;
            if(!(golfie > entity)) { _fun00002_ip = 128; continue _fun00001 }
 110:
            golfie = oscard[entity];
            golfie = golfie.end;
            entity = oscard[entity];
            entity = entity.start;
 128:
            entity = {};
            entity['index'] = report;
            entity['sources'] = tangon;
            entity['zoomed'] = zuuluu;
            zuuluu = function(argFoo, argBar) { // Original name: useThumbnailsProps
                entity = argFoo;
                vacuum = argBar;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = vacuum;
                sizing = _closure1_slot0;
                output = _closure1_slot2;
                verify = 3;
                tangon = output[verify];
                kiloes = undefined;
                report = sizing.bind(kiloes)(tangon);
                tangon = report.useAnimatedRef;
                backup = tangon.bind(report)();
                var _closure3_slot2 = backup;
                golfie = _closure1_slot1;
                update = 4;
                tangon = output[update];
                tangon = golfie.bind(kiloes)(tangon);
                tangon = tangon.bind(kiloes)();
                report = tangon.width;
                tangon = tangon.height;
                oscard = 5;
                oscard = output[oscard];
                oscard = golfie.bind(kiloes)(oscard);
                oscard = oscard.bind(kiloes)();
                cntext = function() { // Original name: onSelectedIndexChange
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure2_slot9;
                        michal = zuuluu.get;
                        zuuluu = michal.bind(zuuluu)();
                        michal = 'thumbnails';
                        if(!(michal !== zuuluu)) { _fun00004_ip = 108; continue _fun00003 }
 26:
                        michal = _closure2_slot9;
                        entity = michal.get;
                        michal = entity.bind(michal)();
                        entity = 'viewer';
                        if(!(entity === michal)) { _fun00004_ip = 165; continue _fun00003 }
 49:
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        entity = 6;
                        michal = oscard[entity];
                        tangon = undefined;
                        zuuluu = report.bind(tangon)(michal);
                        michal = zuuluu.incrementMediaViewerAction;
                        entity = oscard[entity];
                        entity = report.bind(tangon)(entity);
                        entity = entity.IncrementableMediaViewerActions;
                        entity = entity.VIEWER_SWIPE;
                        entity = michal.bind(zuuluu)(entity);
                        _fun00004_ip = 165; continue _fun00003;
 108:
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        entity = 6;
                        michal = oscard[entity];
                        tangon = undefined;
                        zuuluu = report.bind(tangon)(michal);
                        michal = zuuluu.incrementMediaViewerAction;
                        entity = oscard[entity];
                        entity = report.bind(tangon)(entity);
                        entity = entity.IncrementableMediaViewerActions;
                        entity = entity.THUMBNAIL_SWIPE;
                        entity = michal.bind(zuuluu)(entity);
 165:
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        michal = 6;
                        zuuluu = oscard[michal];
                        entity = undefined;
                        tangon = report.bind(entity)(zuuluu);
                        zuuluu = tangon.incrementMediaViewerAction;
                        michal = oscard[michal];
                        michal = report.bind(entity)(michal);
                        michal = michal.IncrementableMediaViewerActions;
                        michal = michal.SELECTED_ITEM_CHANGE;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    }
                };
                var _closure3_slot3 = cntext;
                golfie = output[verify];
                offset = sizing.bind(kiloes)(golfie);
                option = offset.useAnimatedScrollHandler;
                golfie = {};
                romeon = function() { // Original name: V
                    tangon = _closure2_slot4;
                    zuuluu = tangon.set;
                    michal = tangon.get;
                    report = michal.bind(tangon)();
                    michal = 2;
                    michal = michal | report;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure2_slot9;
                    michal = zuuluu.set;
                    entity = 'thumbnails';
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                config = _closure2_slot4;
                foxtra['thumbnailsScrolling'] = config;
                yankee = 2;
                foxtra['SCROLLING_DRAG'] = yankee;
                source = _closure2_slot9;
                foxtra['swipeSource'] = source;
                romeon['__closure'] = foxtra;
                foxtra = 16224520186325.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot10;
                romeon['__initData'] = foxtra;
                golfie['onBeginDrag'] = romeon;
                romeon = function() { // Original name: H
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.set;
                    entity = zuuluu.get;
                    tangon = entity.bind(zuuluu)();
                    entity = -3;
                    entity = entity & tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                foxtra['thumbnailsScrolling'] = config;
                foxtra['SCROLLING_DRAG'] = yankee;
                romeon['__closure'] = foxtra;
                foxtra = 5779899826871.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot11;
                romeon['__initData'] = foxtra;
                golfie['onEndDrag'] = romeon;
                romeon = function(argFoo) { // Original name: D
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        entity = entity.contentOffset;
                        zuuluu = entity.x;
                        entity = _closure3_slot0;
                        yankee = zuuluu / entity;
                        tangon = _closure2_slot9;
                        zuuluu = tangon.get;
                        tangon = zuuluu.bind(tangon)();
                        zuuluu = 'thumbnails';
                        zuuluu = zuuluu === tangon;
                        if(zuuluu) { _fun00006_ip = 107; continue _fun00005 }
 54:
                        tangon = global;
                        oscard = tangon.Math;
                        report = oscard.abs;
                        golfie = tangon.Math;
                        tangon = golfie.round;
                        tangon = tangon.bind(golfie)(yankee);
                        tangon = tangon - yankee;
                        report = report.bind(oscard)(tangon);
                        tangon = 0.01;
                        zuuluu = report < tangon;
 107:
                        if(!zuuluu) { _fun00006_ip = 182; continue _fun00005 }
 110:
                        report = _closure2_slot3;
                        tangon = report.set;
                        zuuluu = global;
                        option = zuuluu.Math;
                        golfie = option.max;
                        offset = zuuluu.Math;
                        verify = offset.min;
                        oscard = zuuluu.Math;
                        zuuluu = oscard.round;
                        oscard = zuuluu.bind(oscard)(yankee);
                        zuuluu = _closure3_slot1;
                        oscard = verify.bind(offset)(oscard, zuuluu);
                        zuuluu = 0;
                        zuuluu = golfie.bind(option)(zuuluu, oscard);
                        zuuluu = tangon.bind(report)(zuuluu);
 182:
                        tangon = _closure2_slot5;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        report = 0;
                        if(!(!(zuuluu >= report))) { _fun00006_ip = 352; continue _fun00005 }
 204:
                        tangon = _closure2_slot7;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = report !== zuuluu;
                        if(zuuluu) { _fun00006_ip = 241; continue _fun00005 }
 224:
                        oscard = _closure2_slot4;
                        tangon = oscard.get;
                        tangon = tangon.bind(oscard)();
                        zuuluu = report !== tangon;
 241:
                        if(!zuuluu) { _fun00006_ip = 274; continue _fun00005 }
 244:
                        report = _closure2_slot3;
                        tangon = report.get;
                        report = tangon.bind(report)();
                        oscard = _closure2_slot2;
                        tangon = oscard.get;
                        tangon = tangon.bind(oscard)();
                        zuuluu = report !== tangon;
 274:
                        if(!zuuluu) { _fun00006_ip = 429; continue _fun00005 }
 280:
                        report = _closure2_slot2;
                        tangon = report.set;
                        oscard = _closure2_slot3;
                        zuuluu = oscard.get;
                        zuuluu = zuuluu.bind(oscard)();
                        zuuluu = tangon.bind(report)(zuuluu);
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        zuuluu = 3;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        report = report.bind(zuuluu)(tangon);
                        tangon = report.runOnJS;
                        michal = _closure3_slot3;
                        michal = tangon.bind(report)(michal);
                        michal = michal.bind(zuuluu)();
                        _fun00006_ip = 429; continue _fun00005;
 352:
                        zuuluu = _closure2_slot3;
                        michal = zuuluu.get;
                        zuuluu = michal.bind(zuuluu)();
                        tangon = _closure2_slot5;
                        michal = tangon.get;
                        michal = michal.bind(tangon)();
                        if(!(zuuluu === michal)) { _fun00006_ip = 429; continue _fun00005 }
 382:
                        tangon = _closure2_slot5;
                        zuuluu = tangon.set;
                        michal = -1;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure2_slot2;
                        michal = zuuluu.set;
                        tangon = _closure2_slot3;
                        entity = tangon.get;
                        entity = entity.bind(tangon)();
                        entity = michal.bind(zuuluu)(entity);
 429:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtra = {};
                ctrled = false;
                foxtra['variableWidthThumbnailsEnabled'] = ctrled;
                echoed = _closure2_slot1;
                foxtra['thumbnailScrollPositions'] = echoed;
                foxtra['thumbnailSize'] = entity;
                foxtra['swipeSource'] = source;
                sequen = _closure2_slot3;
                foxtra['thumbnailsIndex'] = sequen;
                foxtra['maxIndex'] = vacuum;
                record = _closure2_slot5;
                foxtra['thumbnailsAnimateTo'] = record;
                vacuum = _closure2_slot2;
                foxtra['selectedIndex'] = vacuum;
                vacuum = _closure2_slot7;
                foxtra['viewerScrolling'] = vacuum;
                foxtra['thumbnailsScrolling'] = config;
                papara = output[verify];
                papara = sizing.bind(kiloes)(papara);
                papara = papara.runOnJS;
                foxtra['runOnJS'] = papara;
                foxtra['onSelectedIndexChange'] = cntext;
                romeon['__closure'] = foxtra;
                foxtra = 6907172845212.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot12;
                romeon['__initData'] = foxtra;
                golfie['onScroll'] = romeon;
                romeon = function() { // Original name: N
                    tangon = _closure2_slot4;
                    zuuluu = tangon.set;
                    michal = tangon.get;
                    report = michal.bind(tangon)();
                    michal = 4;
                    michal = michal | report;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure2_slot9;
                    michal = zuuluu.set;
                    entity = 'thumbnails';
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                foxtra['thumbnailsScrolling'] = config;
                foxtra['SCROLLING_MOMENTUM'] = update;
                foxtra['swipeSource'] = source;
                romeon['__closure'] = foxtra;
                foxtra = 4138169755088.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot13;
                romeon['__initData'] = foxtra;
                golfie['onMomentumBegin'] = romeon;
                romeon = function() { // Original name: L
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.set;
                    entity = zuuluu.get;
                    tangon = entity.bind(zuuluu)();
                    entity = -5;
                    entity = entity & tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                foxtra['thumbnailsScrolling'] = config;
                foxtra['SCROLLING_MOMENTUM'] = update;
                romeon['__closure'] = foxtra;
                foxtra = 1471443652144.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot14;
                romeon['__initData'] = foxtra;
                golfie['onMomentumEnd'] = romeon;
                option = option.bind(offset)(golfie);
                foxtra = _closure1_slot4;
                romeon = foxtra.useCallback;
                offset = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = _closure2_slot8;
                        michal = zuuluu.get;
                        michal = michal.bind(zuuluu)();
                        if(michal) { _fun00008_ip = 56; continue _fun00007 }
 19:
                        tangon = _closure2_slot5;
                        zuuluu = tangon.set;
                        michal = argFoo;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure2_slot9;
                        michal = zuuluu.set;
                        entity = 'thumbnails';
                        entity = michal.bind(zuuluu)(entity);
 56:
                        entity = undefined;
                        return entity;
                    }
                };
                golfie = new Array(0);
                golfie = romeon.bind(foxtra)(offset, golfie);
                update = _closure1_slot4;
                foxtra = update.useCallback;
                romeon = new Array(1);
                romeon[0] = backup;
                offset = function(argFoo) {
                    michal = _closure2_slot1;
                    entity = argFoo;
                    entity = michal[entity];
                    offset = entity.scrollStart;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(michal);
                    report = oscard.scrollTo;
                    yankee = _closure3_slot2;
                    verify = 0;
                    option = true;
                    romeon = oscard;
                    michal = romeon[report](yankee, offset, verify, option, golfie);
                    return entity;
                };
                source = foxtra.bind(update)(offset, romeon);
                offset = output[verify];
                foxtra = sizing.bind(kiloes)(offset);
                romeon = foxtra.useDerivedValue;
                offset = function() { // Original name: P
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = _closure2_slot5;
                        entity = zuuluu.get;
                        entity = entity.bind(zuuluu)();
                        oscard = 0;
                        if(!(!(entity < oscard))) { _fun00010_ip = 92; continue _fun00009 }
 22:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 3;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.scrollTo;
                        yankee = _closure3_slot2;
                        golfie = _closure2_slot5;
                        michal = golfie.get;
                        michal = michal.bind(golfie)();
                        entity = _closure3_slot0;
                        offset = michal * entity;
                        option = true;
                        romeon = report;
                        verify = 0;
                        entity = romeon[tangon](yankee, offset, verify, option, golfie);
 92:
                        entity = undefined;
                        return entity;
                    }
                };
                update = {};
                update['thumbnailsAnimateTo'] = record;
                update['variableWidthThumbnailsEnabled'] = ctrled;
                record = output[verify];
                record = sizing.bind(kiloes)(record);
                record = record.runOnJS;
                update['runOnJS'] = record;
                update['scrollVarWidthThumbnails'] = source;
                source = output[verify];
                source = sizing.bind(kiloes)(source);
                source = source.scrollTo;
                update['scrollTo'] = source;
                update['ref'] = backup;
                update['thumbnailSize'] = entity;
                offset['__closure'] = update;
                update = 1697086875584.0;
                offset['__workletHash'] = update;
                update = _closure1_slot15;
                offset['__initData'] = update;
                offset = romeon.bind(foxtra)(offset);
                update = _closure1_slot4;
                foxtra = update.useCallback;
                romeon = new Array(1);
                romeon[0] = backup;
                offset = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 7;
                    michal = tangon[entity];
                    entity = undefined;
                    golfie = zuuluu.bind(entity)(michal);
                    oscard = golfie.lerpVarWidthThumbnailScrollBounds;
                    report = _closure2_slot1;
                    michal = argFoo;
                    offset = oscard.bind(golfie)(report, michal);
                    michal = 3;
                    michal = tangon[michal];
                    oscard = zuuluu.bind(entity)(michal);
                    report = oscard.scrollTo;
                    yankee = _closure3_slot2;
                    verify = 0;
                    option = false;
                    romeon = oscard;
                    michal = romeon[report](yankee, offset, verify, option, golfie);
                    return entity;
                };
                source = foxtra.bind(update)(offset, romeon);
                offset = output[verify];
                foxtra = sizing.bind(kiloes)(offset);
                romeon = foxtra.useDerivedValue;
                offset = function() { // Original name: Z
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        zuuluu = _closure2_slot7;
                        entity = zuuluu.get;
                        entity = entity.bind(zuuluu)();
                        oscard = 0;
                        entity = oscard !== entity;
                        if(!entity) { _fun00012_ip = 55; continue _fun00011 }
 25:
                        tangon = _closure2_slot3;
                        zuuluu = tangon.get;
                        tangon = zuuluu.bind(tangon)();
                        report = _closure2_slot6;
                        zuuluu = report.get;
                        zuuluu = zuuluu.bind(report)();
                        entity = tangon !== zuuluu;
 55:
                        if(!entity) { _fun00012_ip = 128; continue _fun00011 }
 58:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 3;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.scrollTo;
                        yankee = _closure3_slot2;
                        golfie = _closure2_slot6;
                        michal = golfie.get;
                        michal = michal.bind(golfie)();
                        entity = _closure3_slot0;
                        offset = michal * entity;
                        option = false;
                        romeon = report;
                        verify = 0;
                        entity = romeon[tangon](yankee, offset, verify, option, golfie);
 128:
                        entity = undefined;
                        return entity;
                    }
                };
                update = {};
                update['viewerScrolling'] = vacuum;
                update['thumbnailsIndex'] = sequen;
                sequen = _closure2_slot6;
                update['viewerPos'] = sequen;
                update['variableWidthThumbnailsEnabled'] = ctrled;
                ctrled = output[verify];
                ctrled = sizing.bind(kiloes)(ctrled);
                ctrled = ctrled.runOnJS;
                update['runOnJS'] = ctrled;
                update['lerpScrollVarWidthThumbnails'] = source;
                source = output[verify];
                source = sizing.bind(kiloes)(source);
                source = source.scrollTo;
                update['scrollTo'] = source;
                update['ref'] = backup;
                update['thumbnailSize'] = entity;
                offset['__closure'] = update;
                update = 10477949154269.0;
                offset['__workletHash'] = update;
                update = _closure1_slot16;
                offset['__initData'] = update;
                offset = romeon.bind(foxtra)(offset);
                foxtra = _closure2_slot0;
                romeon = foxtra.map;
                offset = function(argFoo, argBar) {
                    entity = argBar;
                    return entity;
                };
                ctrled = romeon.bind(foxtra)(offset);
                var _closure3_slot4 = ctrled;
                romeon = foxtra.map;
                offset = function(argFoo) {
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 8;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.flattenSource;
                    michal = argFoo;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = global;
                    report = zuuluu.Math;
                    tangon = report.max;
                    golfie = zuuluu.Math;
                    oscard = golfie.min;
                    zuuluu = michal.width;
                    option = _closure1_slot6;
                    michal = michal.height;
                    michal = option / michal;
                    zuuluu = zuuluu * michal;
                    michal = _closure1_slot7;
                    zuuluu = oscard.bind(golfie)(zuuluu, michal);
                    michal = _closure1_slot8;
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity = _closure1_slot8;
                    michal = michal - entity;
                    entity = 2;
                    entity = michal / entity;
                    return entity;
                };
                source = romeon.bind(foxtra)(offset);
                var _closure3_slot5 = source;
                offset = output[verify];
                foxtra = sizing.bind(kiloes)(offset);
                romeon = foxtra.useDerivedValue;
                offset = function() { // Original name: ee
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zuuluu = _closure2_slot4;
                        entity = zuuluu.get;
                        zuuluu = entity.bind(zuuluu)();
                        entity = 0;
                        zuuluu = zuuluu > entity;
                        if(zuuluu) { _fun00014_ip = 94; continue _fun00013 }
 25:
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        zuuluu = 3;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        golfie = report.bind(zuuluu)(tangon);
                        oscard = golfie.interpolate;
                        zuuluu = _closure2_slot6;
                        michal = zuuluu.get;
                        yankee = michal.bind(zuuluu)();
                        offset = _closure3_slot4;
                        verify = _closure3_slot5;
                        option = 'clamp';
                        romeon = golfie;
                        michal = romeon[oscard](yankee, offset, verify, option, golfie);
                        entity = -michal;
 94:
                        return entity;
                    }
                };
                update = {};
                update['thumbnailsScrolling'] = config;
                config = output[verify];
                config = sizing.bind(kiloes)(config);
                config = config.interpolate;
                update['interpolate'] = config;
                update['viewerPos'] = sequen;
                update['interpolateInput'] = ctrled;
                update['interpolateOutput'] = source;
                offset['__closure'] = update;
                update = 10097839523885.0;
                offset['__workletHash'] = update;
                update = _closure1_slot17;
                offset['__initData'] = update;
                ctrled = romeon.bind(foxtra)(offset);
                var _closure3_slot6 = ctrled;
                offset = report - entity;
                romeon = offset / yankee;
                offset = oscard.left;
                romeon = romeon - offset;
                var _closure3_slot7 = romeon;
                offset = output[verify];
                update = sizing.bind(kiloes)(offset);
                foxtra = update.useAnimatedStyle;
                offset = function() { // Original name: te
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = {};
                        zuuluu = _closure2_slot7;
                        michal = zuuluu.get;
                        zuuluu = michal.bind(zuuluu)();
                        michal = 0;
                        if(!(!(zuuluu > michal))) { _fun00016_ip = 95; continue _fun00015 }
 24:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 9;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        report = tangon.bind(michal)(zuuluu);
                        tangon = report.withSpring;
                        zuuluu = _closure3_slot7;
                        oscard = _closure3_slot6;
                        michal = oscard.get;
                        michal = michal.bind(oscard)();
                        zuuluu = zuuluu + michal;
                        michal = {};
                        oscard = true;
                        michal['overshootClamping'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        _fun00016_ip = 119; continue _fun00015;
 95:
                        tangon = _closure3_slot7;
                        report = _closure3_slot6;
                        zuuluu = report.get;
                        zuuluu = zuuluu.bind(report)();
                        michal = tangon + zuuluu;
 119:
                        entity['width'] = michal;
                        return entity;
                    }
                };
                sequen = {};
                sequen['viewerScrolling'] = vacuum;
                sequen['headerBufferSize'] = romeon;
                sequen['margin'] = ctrled;
                source = 9;
                config = output[source];
                config = sizing.bind(kiloes)(config);
                config = config.withSpring;
                sequen['withSpring'] = config;
                offset['__closure'] = sequen;
                sequen = 11328769587377.0;
                offset['__workletHash'] = sequen;
                sequen = _closure1_slot18;
                offset['__initData'] = sequen;
                foxtra = foxtra.bind(update)(offset);
                update = echoed.length;
                offset = 1;
                offset = update - offset;
                offset = echoed[offset];
                offset = report - entity;
                offset = offset / yankee;
                oscard = oscard.right;
                offset = offset - oscard;
                var _closure3_slot8 = offset;
                oscard = output[verify];
                echoed = sizing.bind(kiloes)(oscard);
                yankee = echoed.useAnimatedStyle;
                oscard = function() { // Original name: ie
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = {};
                        zuuluu = _closure2_slot7;
                        michal = zuuluu.get;
                        zuuluu = michal.bind(zuuluu)();
                        michal = 0;
                        if(!(!(zuuluu > michal))) { _fun00018_ip = 95; continue _fun00017 }
 24:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 9;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        report = tangon.bind(michal)(zuuluu);
                        tangon = report.withSpring;
                        zuuluu = _closure3_slot8;
                        oscard = _closure3_slot6;
                        michal = oscard.get;
                        michal = michal.bind(oscard)();
                        zuuluu = zuuluu + michal;
                        michal = {};
                        oscard = true;
                        michal['overshootClamping'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        _fun00018_ip = 119; continue _fun00017;
 95:
                        tangon = _closure3_slot8;
                        report = _closure3_slot6;
                        zuuluu = report.get;
                        zuuluu = zuuluu.bind(report)();
                        michal = tangon + zuuluu;
 119:
                        entity['width'] = michal;
                        return entity;
                    }
                };
                update = {};
                update['viewerScrolling'] = vacuum;
                update['footerBufferSize'] = offset;
                update['margin'] = ctrled;
                source = output[source];
                source = sizing.bind(kiloes)(source);
                source = source.withSpring;
                update['withSpring'] = source;
                oscard['__closure'] = update;
                update = 10532164558483.0;
                oscard['__workletHash'] = update;
                update = _closure1_slot19;
                oscard['__initData'] = update;
                yankee = yankee.bind(echoed)(oscard);
                source = _closure1_slot4;
                update = source.useCallback;
                echoed = function(argFoo, argBar) {
                    zuuluu = argFoo;
                    backup = argBar;
                    var _closure4_slot0 = backup;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    michal = 3;
                    report = offset[michal];
                    option = undefined;
                    golfie = verify.bind(option)(report);
                    oscard = golfie.useDerivedValue;
                    report = function() { // Original name: n
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 3;
                        michal = michal[entity];
                        entity = undefined;
                        oscard = zuuluu.bind(entity)(michal);
                        report = oscard.interpolate;
                        michal = _closure2_slot6;
                        entity = michal.get;
                        yankee = entity.bind(michal)();
                        michal = _closure4_slot0;
                        entity = 1;
                        golfie = michal - entity;
                        zuuluu = new Array(3);
                        zuuluu[0] = golfie;
                        zuuluu[1] = michal;
                        entity = michal + entity;
                        zuuluu[2] = entity;
                        verify = [0.4, 1, 0.4];
                        option = 'clamp';
                        romeon = oscard;
                        offset = zuuluu;
                        entity = romeon[report](yankee, offset, verify, option, golfie);
                        return entity;
                    };
                    romeon = {};
                    yankee = offset[michal];
                    yankee = verify.bind(option)(yankee);
                    yankee = yankee.interpolate;
                    romeon['interpolate'] = yankee;
                    kiloes = _closure2_slot6;
                    romeon['viewerPos'] = kiloes;
                    romeon['index'] = backup;
                    report['__closure'] = romeon;
                    romeon = 5784737783661.0;
                    report['__workletHash'] = romeon;
                    romeon = _closure1_slot20;
                    report['__initData'] = romeon;
                    oscard = oscard.bind(golfie)(report);
                    var _closure4_slot1 = oscard;
                    report = global;
                    romeon = report.Math;
                    golfie = romeon.max;
                    sizing = report.Math;
                    foxtra = sizing.min;
                    report = zuuluu.width;
                    output = _closure1_slot6;
                    zuuluu = zuuluu.height;
                    zuuluu = output / zuuluu;
                    report = report * zuuluu;
                    zuuluu = _closure1_slot7;
                    report = foxtra.bind(sizing)(report, zuuluu);
                    zuuluu = _closure1_slot8;
                    foxtra = golfie.bind(romeon)(report, zuuluu);
                    var _closure4_slot2 = foxtra;
                    zuuluu = offset[michal];
                    golfie = verify.bind(option)(zuuluu);
                    report = golfie.useDerivedValue;
                    zuuluu = function() { // Original name: l
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            zuuluu = _closure2_slot4;
                            entity = zuuluu.get;
                            zuuluu = entity.bind(zuuluu)();
                            entity = 0;
                            if(!(!(zuuluu > entity))) { _fun00020_ip = 150; continue _fun00019 }
 25:
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 3;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            oscard = report.bind(zuuluu)(tangon);
                            report = oscard.interpolate;
                            zuuluu = _closure2_slot6;
                            michal = zuuluu.get;
                            foxtra = michal.bind(zuuluu)();
                            option = _closure4_slot0;
                            michal = 1;
                            verify = option - michal;
                            zuuluu = new Array(3);
                            zuuluu[0] = verify;
                            zuuluu[1] = option;
                            michal = option + michal;
                            zuuluu[2] = michal;
                            option = _closure1_slot8;
                            michal = new Array(3);
                            michal[0] = option;
                            golfie = _closure4_slot2;
                            michal[1] = golfie;
                            entity = _closure1_slot8;
                            michal[2] = entity;
                            offset = 'clamp';
                            backup = oscard;
                            romeon = zuuluu;
                            yankee = michal;
                            entity = backup[report](foxtra, romeon, yankee, offset, verify);
                            _fun00020_ip = 157; continue _fun00019;
 150:
                            entity = _closure1_slot8;
 157:
                            return entity;
                        }
                    };
                    romeon = {};
                    sizing = _closure2_slot4;
                    romeon['thumbnailsScrolling'] = sizing;
                    sizing = _closure1_slot8;
                    romeon['THUMBNAIL_MIN_WIDTH'] = sizing;
                    sizing = offset[michal];
                    sizing = verify.bind(option)(sizing);
                    sizing = sizing.interpolate;
                    romeon['interpolate'] = sizing;
                    romeon['viewerPos'] = kiloes;
                    romeon['index'] = backup;
                    romeon['sourceWidth'] = foxtra;
                    zuuluu['__closure'] = romeon;
                    romeon = 12440745987072.0;
                    zuuluu['__workletHash'] = romeon;
                    romeon = _closure1_slot21;
                    zuuluu['__initData'] = romeon;
                    golfie = report.bind(golfie)(zuuluu);
                    var _closure4_slot3 = golfie;
                    michal = offset[michal];
                    zuuluu = verify.bind(option)(michal);
                    michal = zuuluu.useAnimatedStyle;
                    entity = function() { // Original name: c
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            entity = {};
                            zuuluu = _closure2_slot7;
                            michal = zuuluu.get;
                            zuuluu = michal.bind(zuuluu)();
                            michal = 0;
                            if(!(!(zuuluu > michal))) { _fun00022_ip = 87; continue _fun00021 }
 24:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 9;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            report = tangon.bind(michal)(zuuluu);
                            tangon = report.withSpring;
                            zuuluu = _closure4_slot3;
                            michal = zuuluu.get;
                            zuuluu = michal.bind(zuuluu)();
                            michal = {};
                            oscard = true;
                            michal['overshootClamping'] = oscard;
                            michal = tangon.bind(report)(zuuluu, michal);
                            _fun00022_ip = 103; continue _fun00021;
 87:
                            tangon = _closure4_slot3;
                            zuuluu = tangon.get;
                            michal = zuuluu.bind(tangon)();
 103:
                            entity['width'] = michal;
                            michal = _closure1_slot6;
                            entity['height'] = michal;
                            zuuluu = _closure4_slot1;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            entity['opacity'] = michal;
                            return entity;
                        }
                    };
                    report = {};
                    yankee = _closure2_slot7;
                    report['viewerScrolling'] = yankee;
                    report['_width'] = golfie;
                    golfie = 9;
                    golfie = offset[golfie];
                    golfie = verify.bind(option)(golfie);
                    golfie = golfie.withSpring;
                    report['withSpring'] = golfie;
                    golfie = _closure1_slot6;
                    report['THUMBNAIL_HEIGHT'] = golfie;
                    report['opacity'] = oscard;
                    entity['__closure'] = report;
                    report = 513826663139.0;
                    entity['__workletHash'] = report;
                    tangon = _closure1_slot22;
                    entity['__initData'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                oscard = new Array(0);
                oscard = update.bind(source)(echoed, oscard);
                verify = output[verify];
                sizing = sizing.bind(kiloes)(verify);
                kiloes = sizing.useDerivedValue;
                verify = function() { // Original name: ne
                    michal = _closure2_slot8;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    entity = !entity;
                    return entity;
                };
                output = {};
                result = _closure2_slot8;
                output['zoomed'] = result;
                verify['__closure'] = output;
                output = 7667674289153.0;
                verify['__workletHash'] = output;
                output = _closure1_slot23;
                verify['__initData'] = output;
                verify = kiloes.bind(sizing)(verify);
                sizing = _closure1_slot4;
                kiloes = sizing.useMemo;
                michal = new Array(1);
                michal[0] = entity;
                entity = function() {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        entity = new Array(0);
                        michal = _closure2_slot1;
                        michal = michal.length;
                        tangon = 0;
                        michal = tangon < michal;
                        if(!michal) { _fun00024_ip = 62; continue _fun00023 }
 28:
                        oscard = entity.push;
                        michal = _closure3_slot0;
                        michal = tangon * michal;
                        michal = oscard.bind(entity)(michal);
                        tangon = tangon + 1;
                        michal = _closure2_slot1;
                        michal = michal.length;
                        if(tangon < michal) { _fun00024_ip = 28; continue _fun00023 }
 62:
                        return entity;
                    }
                };
                michal = kiloes.bind(sizing)(entity, michal);
                entity = {};
                entity['ref'] = backup;
                entity['headerBufferStyle'] = foxtra;
                entity['headerBufferSize'] = romeon;
                entity['footerBufferStyle'] = yankee;
                entity['footerBufferSize'] = offset;
                entity['scrollEnabled'] = verify;
                entity['onScroll'] = option;
                entity['onSelect'] = golfie;
                entity['useThumbnailStyle'] = oscard;
                entity['screenWidth'] = report;
                entity['screenHeight'] = tangon;
                zuuluu = function(argFoo, argBar) { // Original name: itemSize
                    entity = _closure1_slot9;
                    return entity;
                };
                entity['itemSize'] = zuuluu;
                entity['snapToOffsets'] = michal;
                return entity;
            };
            entity['useThumbnailsProps'] = zuuluu;
            michal = function() { // Original name: useViewerProps
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                zuuluu = 3;
                tangon = yankee[zuuluu];
                option = undefined;
                report = verify.bind(option)(tangon);
                tangon = report.useAnimatedRef;
                report = tangon.bind(report)();
                var _closure3_slot0 = report;
                oscard = _closure1_slot1;
                backup = 4;
                tangon = yankee[backup];
                tangon = oscard.bind(option)(tangon);
                tangon = tangon.bind(option)();
                offset = tangon.width;
                var _closure3_slot1 = offset;
                oscard = tangon.height;
                var _closure3_slot2 = oscard;
                tangon = yankee[zuuluu];
                romeon = verify.bind(option)(tangon);
                golfie = romeon.useDerivedValue;
                tangon = function() { // Original name: n
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        zuuluu = _closure2_slot5;
                        entity = zuuluu.get;
                        zuuluu = entity.bind(zuuluu)();
                        entity = -1;
                        if(!(entity !== zuuluu)) { _fun00026_ip = 96; continue _fun00025 }
 26:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 3;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(zuuluu);
                        report = oscard.scrollTo;
                        offset = _closure3_slot0;
                        zuuluu = _closure2_slot5;
                        michal = zuuluu.get;
                        michal = michal.bind(zuuluu)();
                        entity = _closure3_slot1;
                        verify = michal * entity;
                        option = 0;
                        golfie = false;
                        yankee = oscard;
                        entity = yankee[report](offset, verify, option, golfie, oscard);
 96:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtra = {};
                result = _closure2_slot5;
                foxtra['thumbnailsAnimateTo'] = result;
                kiloes = yankee[zuuluu];
                kiloes = verify.bind(option)(kiloes);
                kiloes = kiloes.scrollTo;
                foxtra['scrollTo'] = kiloes;
                foxtra['ref'] = report;
                foxtra['screenWidth'] = offset;
                tangon['__closure'] = foxtra;
                foxtra = 11860326453239.0;
                tangon['__workletHash'] = foxtra;
                foxtra = _closure1_slot24;
                tangon['__initData'] = foxtra;
                tangon = golfie.bind(romeon)(tangon);
                tangon = yankee[zuuluu];
                romeon = verify.bind(option)(tangon);
                golfie = romeon.useDerivedValue;
                tangon = function() { // Original name: l
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zuuluu = _closure2_slot4;
                        entity = zuuluu.get;
                        entity = entity.bind(zuuluu)();
                        oscard = 0;
                        entity = oscard === entity;
                        if(entity) { _fun00028_ip = 42; continue _fun00027 }
 25:
                        tangon = _closure2_slot7;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        entity = zuuluu > oscard;
 42:
                        if(entity) { _fun00028_ip = 115; continue _fun00027 }
 45:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 3;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.scrollTo;
                        yankee = _closure3_slot0;
                        golfie = _closure2_slot3;
                        michal = golfie.get;
                        michal = michal.bind(golfie)();
                        entity = _closure3_slot1;
                        offset = michal * entity;
                        option = false;
                        romeon = report;
                        verify = 0;
                        entity = romeon[tangon](yankee, offset, verify, option, golfie);
 115:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtra = {};
                echoed = _closure2_slot4;
                foxtra['thumbnailsScrolling'] = echoed;
                kiloes = _closure2_slot7;
                foxtra['viewerScrolling'] = kiloes;
                sizing = yankee[zuuluu];
                sizing = verify.bind(option)(sizing);
                sizing = sizing.scrollTo;
                foxtra['scrollTo'] = sizing;
                foxtra['ref'] = report;
                sizing = _closure2_slot3;
                foxtra['thumbnailsIndex'] = sizing;
                foxtra['screenWidth'] = offset;
                tangon['__closure'] = foxtra;
                foxtra = 6332404461490.0;
                tangon['__workletHash'] = foxtra;
                foxtra = _closure1_slot25;
                tangon['__initData'] = foxtra;
                tangon = golfie.bind(romeon)(tangon);
                zuuluu = yankee[zuuluu];
                golfie = verify.bind(option)(zuuluu);
                tangon = golfie.useAnimatedScrollHandler;
                zuuluu = {};
                romeon = function() { // Original name: b
                    tangon = _closure2_slot7;
                    zuuluu = tangon.set;
                    michal = tangon.get;
                    report = michal.bind(tangon)();
                    michal = 2;
                    michal = michal | report;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure2_slot9;
                    michal = zuuluu.set;
                    entity = 'viewer';
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                foxtra['viewerScrolling'] = kiloes;
                update = 2;
                foxtra['SCROLLING_DRAG'] = update;
                sizing = _closure2_slot9;
                foxtra['swipeSource'] = sizing;
                romeon['__closure'] = foxtra;
                foxtra = 1082965969005.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot26;
                romeon['__initData'] = foxtra;
                zuuluu['onBeginDrag'] = romeon;
                romeon = function() { // Original name: w
                    zuuluu = _closure2_slot7;
                    michal = zuuluu.set;
                    entity = zuuluu.get;
                    tangon = entity.bind(zuuluu)();
                    entity = -3;
                    entity = entity & tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                foxtra['viewerScrolling'] = kiloes;
                foxtra['SCROLLING_DRAG'] = update;
                romeon['__closure'] = foxtra;
                foxtra = 1722948238280.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot27;
                romeon['__initData'] = foxtra;
                zuuluu['onEndDrag'] = romeon;
                romeon = function(argFoo) { // Original name: S
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        zuuluu = _closure2_slot7;
                        michal = zuuluu.get;
                        michal = michal.bind(zuuluu)();
                        tangon = 0;
                        michal = tangon === michal;
                        if(!michal) { _fun00030_ip = 42; continue _fun00029 }
 25:
                        report = _closure2_slot4;
                        zuuluu = report.get;
                        zuuluu = zuuluu.bind(report)();
                        michal = tangon === zuuluu;
 42:
                        if(!michal) { _fun00030_ip = 68; continue _fun00029 }
 45:
                        tangon = _closure2_slot5;
                        zuuluu = tangon.get;
                        tangon = zuuluu.bind(tangon)();
                        zuuluu = -1;
                        michal = zuuluu === tangon;
 68:
                        if(michal) { _fun00030_ip = 110; continue _fun00029 }
 71:
                        zuuluu = _closure2_slot6;
                        michal = zuuluu.set;
                        entity = argFoo;
                        entity = entity.contentOffset;
                        tangon = entity.x;
                        entity = _closure3_slot1;
                        entity = tangon / entity;
                        entity = michal.bind(zuuluu)(entity);
 110:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtra = {};
                foxtra['viewerScrolling'] = kiloes;
                foxtra['thumbnailsScrolling'] = echoed;
                foxtra['thumbnailsAnimateTo'] = result;
                output = _closure2_slot6;
                foxtra['viewerPos'] = output;
                foxtra['screenWidth'] = offset;
                romeon['__closure'] = foxtra;
                foxtra = 2738090250956.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot28;
                romeon['__initData'] = foxtra;
                zuuluu['onScroll'] = romeon;
                romeon = function() { // Original name: _
                    tangon = _closure2_slot7;
                    zuuluu = tangon.set;
                    michal = tangon.get;
                    report = michal.bind(tangon)();
                    michal = 4;
                    michal = michal | report;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure2_slot9;
                    michal = zuuluu.set;
                    entity = 'viewer';
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                foxtra['viewerScrolling'] = kiloes;
                foxtra['SCROLLING_MOMENTUM'] = backup;
                foxtra['swipeSource'] = sizing;
                romeon['__closure'] = foxtra;
                foxtra = 16635271467463.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot29;
                romeon['__initData'] = foxtra;
                zuuluu['onMomentumBegin'] = romeon;
                romeon = function() { // Original name: h
                    zuuluu = _closure2_slot7;
                    michal = zuuluu.set;
                    entity = zuuluu.get;
                    tangon = entity.bind(zuuluu)();
                    entity = -5;
                    entity = entity & tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                foxtra['viewerScrolling'] = kiloes;
                foxtra['SCROLLING_MOMENTUM'] = backup;
                romeon['__closure'] = foxtra;
                foxtra = 8806989101472.0;
                romeon['__workletHash'] = foxtra;
                foxtra = _closure1_slot30;
                romeon['__initData'] = foxtra;
                zuuluu['onMomentumEnd'] = romeon;
                tangon = tangon.bind(golfie)(zuuluu);
                zuuluu = 10;
                golfie = yankee[zuuluu];
                romeon = verify.bind(option)(golfie);
                golfie = romeon.useOrientation;
                golfie = golfie.bind(romeon)();
                zuuluu = yankee[zuuluu];
                zuuluu = verify.bind(option)(zuuluu);
                zuuluu = zuuluu.OrientationType;
                zuuluu = zuuluu.LANDSCAPE;
                zuuluu = golfie === zuuluu;
                var _closure3_slot3 = zuuluu;
                verify = _closure1_slot4;
                option = verify.useCallback;
                golfie = new Array(4);
                golfie[0] = report;
                golfie[1] = zuuluu;
                golfie[2] = offset;
                golfie[3] = oscard;
                zuuluu = function() {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        michal = _closure3_slot3;
                        zuuluu = global;
                        oscard = zuuluu.Math;
                        if(michal) { _fun00032_ip = 39; continue _fun00031 }
 18:
                        tangon = oscard.min;
                        zuuluu = _closure3_slot1;
                        michal = _closure3_slot2;
                        zuuluu = tangon.bind(oscard)(zuuluu, michal);
                        _fun00032_ip = 58; continue _fun00031;
 39:
                        report = oscard.max;
                        tangon = _closure3_slot1;
                        michal = _closure3_slot2;
                        zuuluu = report.bind(oscard)(tangon, michal);
 58:
                        tangon = _closure2_slot2;
                        michal = tangon.get;
                        michal = michal.bind(tangon)();
                        tangon = michal * zuuluu;
                        entity = _closure3_slot0;
                        zuuluu = entity.current;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00032_ip = 107; continue _fun00031 }
 93:
                        michal = zuuluu.scrollTo;
                        entity = false;
                        entity = michal.bind(zuuluu)(tangon, entity);
 107:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = option.bind(verify)(zuuluu, golfie);
                verify = _closure1_slot4;
                option = verify.useEffect;
                golfie = new Array(3);
                golfie[0] = offset;
                golfie[1] = oscard;
                golfie[2] = report;
                oscard = function() {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        entity = _closure3_slot0;
                        michal = entity.current;
                        entity = null;
                        if(!(entity != michal)) { _fun00034_ip = 28; continue _fun00033 }
 18:
                        entity = michal.reset;
                        entity = entity.bind(michal)();
 28:
                        entity = undefined;
                        return entity;
                    }
                };
                oscard = option.bind(verify)(oscard, golfie);
                golfie = _closure1_slot4;
                oscard = golfie.useCallback;
                michal = function(argFoo) {
                    backup = argFoo;
                    var _closure4_slot0 = backup;
                    tangon = _closure1_slot4;
                    zuuluu = tangon.useState;
                    foxtra = _closure2_slot2;
                    entity = foxtra.get;
                    entity = entity.bind(foxtra)();
                    entity = backup === entity;
                    tangon = zuuluu.bind(tangon)(entity);
                    zuuluu = _closure1_slot3;
                    yankee = undefined;
                    entity = 2;
                    tangon = zuuluu.bind(yankee)(tangon, entity);
                    entity = 0;
                    entity = tangon[entity];
                    zuuluu = 1;
                    option = tangon[zuuluu];
                    var _closure4_slot1 = option;
                    offset = _closure1_slot0;
                    romeon = _closure1_slot2;
                    verify = 3;
                    zuuluu = romeon[verify];
                    report = offset.bind(yankee)(zuuluu);
                    tangon = report.useAnimatedReaction;
                    zuuluu = function() { // Original name: o
                        michal = _closure4_slot0;
                        zuuluu = _closure2_slot2;
                        entity = zuuluu.get;
                        entity = entity.bind(zuuluu)();
                        entity = michal === entity;
                        return entity;
                    };
                    golfie = {};
                    golfie['index'] = backup;
                    golfie['selectedIndex'] = foxtra;
                    zuuluu['__closure'] = golfie;
                    golfie = 16460720517812.0;
                    zuuluu['__workletHash'] = golfie;
                    golfie = _closure1_slot31;
                    zuuluu['__initData'] = golfie;
                    michal = function(argFoo, argBar) { // Original name: l
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                            zuuluu = argFoo;
                            michal = argBar;
                            entity = null;
                            entity = entity != michal;
                            if(!entity) { _fun00036_ip = 19; continue _fun00035 }
 15:
                            entity = michal !== zuuluu;
 19:
                            if(!entity) { _fun00036_ip = 69; continue _fun00035 }
 22:
                            tangon = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 3;
                            entity = michal[entity];
                            michal = undefined;
                            report = tangon.bind(michal)(entity);
                            tangon = report.runOnJS;
                            entity = _closure4_slot1;
                            entity = tangon.bind(report)(entity);
                            entity = entity.bind(michal)(zuuluu);
 69:
                            entity = undefined;
                            return entity;
                        }
                    };
                    golfie = {};
                    verify = romeon[verify];
                    verify = offset.bind(yankee)(verify);
                    verify = verify.runOnJS;
                    golfie['runOnJS'] = verify;
                    golfie['setVisible'] = option;
                    michal['__closure'] = golfie;
                    golfie = 2991686939184.0;
                    michal['__workletHash'] = golfie;
                    oscard = _closure1_slot32;
                    michal['__initData'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                entity = new Array(0);
                michal = oscard.bind(golfie)(michal, entity);
                entity = {};
                entity['ref'] = report;
                entity['onScroll'] = tangon;
                entity['onContentSizeChange'] = zuuluu;
                entity['useItemVisible'] = michal;
                return entity;
            };
            entity['useViewerProps'] = michal;
            return entity;
        }
    };
    var _closure1_slot33 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.THUMBNAIL_MARGIN;
    var _closure1_slot5 = option;
    option = report.THUMBNAIL_HEIGHT;
    var _closure1_slot6 = option;
    option = report.THUMBNAIL_MAX_WIDTH;
    var _closure1_slot7 = option;
    option = report.THUMBNAIL_MIN_WIDTH;
    var _closure1_slot8 = option;
    report = report.THUMBNAIL_WIDTH_MARGIN;
    var _closure1_slot9 = report;
    report = {};
    option = "function useMediaViewerSyncerTsx1(){const{thumbnailsScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');}";
    report['code'] = option;
    var _closure1_slot10 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx2(){const{thumbnailsScrolling,SCROLLING_DRAG}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);}';
    report['code'] = option;
    var _closure1_slot11 = report;
    report = {};
    option = "function useMediaViewerSyncerTsx3(event){const{variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,thumbnailsIndex,maxIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,runOnJS,onSelectedIndexChange}=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){thumbnailsIndex.set(Math.max(0,Math.min(Math.round(thumbnails),maxIndex)));}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());runOnJS(onSelectedIndexChange)();}}";
    report['code'] = option;
    var _closure1_slot12 = report;
    report = {};
    option = "function useMediaViewerSyncerTsx4(){const{thumbnailsScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('thumbnails');}";
    report['code'] = option;
    var _closure1_slot13 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx5(){const{thumbnailsScrolling,SCROLLING_MOMENTUM}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_MOMENTUM);}';
    report['code'] = option;
    var _closure1_slot14 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx6(){const{thumbnailsAnimateTo,variableWidthThumbnailsEnabled,runOnJS,scrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(thumbnailsAnimateTo.get()<0)return;if(variableWidthThumbnailsEnabled){runOnJS(scrollVarWidthThumbnails)(thumbnailsAnimateTo.get());}else{scrollTo(ref,thumbnailsAnimateTo.get()*thumbnailSize,0,true);}}';
    report['code'] = option;
    var _closure1_slot15 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx7(){const{viewerScrolling,thumbnailsIndex,viewerPos,variableWidthThumbnailsEnabled,runOnJS,lerpScrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(viewerScrolling.get()===0)return;else if(thumbnailsIndex.get()!==viewerPos.get()){if(variableWidthThumbnailsEnabled){runOnJS(lerpScrollVarWidthThumbnails)(viewerPos.get());}else{scrollTo(ref,viewerPos.get()*thumbnailSize,0,false);}}}';
    report['code'] = option;
    var _closure1_slot16 = report;
    report = {};
    option = "function useMediaViewerSyncerTsx8(){const{thumbnailsScrolling,interpolate,viewerPos,interpolateInput,interpolateOutput}=this.__closure;return thumbnailsScrolling.get()>0?0:-interpolate(viewerPos.get(),interpolateInput,interpolateOutput,'clamp');}";
    report['code'] = option;
    var _closure1_slot17 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx9(){const{viewerScrolling,headerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?headerBufferSize+margin.get():withSpring(headerBufferSize+margin.get(),{overshootClamping:true})};}';
    report['code'] = option;
    var _closure1_slot18 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx10(){const{viewerScrolling,footerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?footerBufferSize+margin.get():withSpring(footerBufferSize+margin.get(),{overshootClamping:true})};}';
    report['code'] = option;
    var _closure1_slot19 = report;
    report = {};
    option = "function useMediaViewerSyncerTsx11(){const{interpolate,viewerPos,index}=this.__closure;return interpolate(viewerPos.get(),[index-1,index,index+1],[0.4,1,0.4],'clamp');}";
    report['code'] = option;
    var _closure1_slot20 = report;
    report = {};
    option = "function useMediaViewerSyncerTsx13(){const{thumbnailsScrolling,THUMBNAIL_MIN_WIDTH,interpolate,viewerPos,index,sourceWidth}=this.__closure;return thumbnailsScrolling.get()>0?THUMBNAIL_MIN_WIDTH:interpolate(viewerPos.get(),[index-1,index,index+1],[THUMBNAIL_MIN_WIDTH,sourceWidth,THUMBNAIL_MIN_WIDTH],'clamp');}";
    report['code'] = option;
    var _closure1_slot21 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx14(){const{viewerScrolling,_width,withSpring,THUMBNAIL_HEIGHT,opacity}=this.__closure;return{width:viewerScrolling.get()>0?_width.get():withSpring(_width.get(),{overshootClamping:true}),height:THUMBNAIL_HEIGHT,opacity:opacity.get()};}';
    report['code'] = option;
    var _closure1_slot22 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx15(){const{zoomed}=this.__closure;return!zoomed.get();}';
    report['code'] = option;
    var _closure1_slot23 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx16(){const{thumbnailsAnimateTo,scrollTo,ref,screenWidth}=this.__closure;if(thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);}';
    report['code'] = option;
    var _closure1_slot24 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx17(){const{thumbnailsScrolling,viewerScrolling,scrollTo,ref,thumbnailsIndex,screenWidth}=this.__closure;if(thumbnailsScrolling.get()===0||viewerScrolling.get()>0)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);}';
    report['code'] = option;
    var _closure1_slot25 = report;
    report = {};
    option = "function useMediaViewerSyncerTsx18(){const{viewerScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');}";
    report['code'] = option;
    var _closure1_slot26 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx19(){const{viewerScrolling,SCROLLING_DRAG}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);}';
    report['code'] = option;
    var _closure1_slot27 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx20(event){const{viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,viewerPos,screenWidth}=this.__closure;if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;viewerPos.set(event.contentOffset.x/screenWidth);}';
    report['code'] = option;
    var _closure1_slot28 = report;
    report = {};
    option = "function useMediaViewerSyncerTsx21(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}";
    report['code'] = option;
    var _closure1_slot29 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}';
    report['code'] = option;
    var _closure1_slot30 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx23(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}';
    report['code'] = option;
    var _closure1_slot31 = report;
    report = {};
    option = 'function useMediaViewerSyncerTsx24(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}';
    report['code'] = option;
    var _closure1_slot32 = report;
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/media_viewer/native/useMediaViewerSyncer.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['makeMediaViewerSyncer'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useMediaViewerSyncer
        oscard = argFoo;
        zuuluu = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = zuuluu;
        golfie = _closure1_slot4;
        report = golfie.useMemo;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            verify = _closure2_slot1;
            entity = {};
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 3;
            oscard = report[michal];
            tangon = undefined;
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            oscard = oscard.bind(golfie)(verify);
            entity['selectedIndex'] = oscard;
            oscard = report[michal];
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            oscard = oscard.bind(golfie)(verify);
            entity['thumbnailsIndex'] = oscard;
            oscard = report[michal];
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            option = 0;
            oscard = oscard.bind(golfie)(option);
            entity['thumbnailsScrolling'] = oscard;
            oscard = report[michal];
            offset = zuuluu.bind(tangon)(oscard);
            golfie = offset.makeMutable;
            oscard = -1;
            oscard = golfie.bind(offset)(oscard);
            entity['thumbnailsAnimateTo'] = oscard;
            oscard = report[michal];
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            oscard = oscard.bind(golfie)(verify);
            entity['viewerPos'] = oscard;
            oscard = report[michal];
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            oscard = oscard.bind(golfie)(option);
            entity['viewerScrolling'] = oscard;
            oscard = report[michal];
            option = zuuluu.bind(tangon)(oscard);
            golfie = option.makeMutable;
            oscard = false;
            oscard = golfie.bind(option)(oscard);
            entity['zoomed'] = oscard;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.makeMutable;
            michal = michal.bind(zuuluu)(tangon);
            entity['swipeSource'] = michal;
            return entity;
        };
        report = report.bind(golfie)(zuuluu, tangon);
        var _closure2_slot2 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                report = _closure2_slot0;
                tangon = new Array(0);
                michal = report.length;
                romeon = 0;
                oscard = romeon < michal;
                yankee = global;
                offset = 2;
                verify = 8;
                zuuluu = undefined;
                option = 0;
                golfie = 0;
                if(!oscard) { _fun00038_ip = 261; continue _fun00037 }
 45:
                foxtra = _closure1_slot0;
                oscard = _closure1_slot2;
                oscard = oscard[verify];
                backup = foxtra.bind(zuuluu)(oscard);
                foxtra = backup.flattenSource;
                oscard = report[golfie];
                oscard = foxtra.bind(backup)(oscard);
                kiloes = yankee.Math;
                backup = kiloes.max;
                output = yankee.Math;
                sizing = output.min;
                foxtra = oscard.width;
                result = _closure1_slot6;
                oscard = oscard.height;
                oscard = result / oscard;
                foxtra = foxtra * oscard;
                oscard = _closure1_slot7;
                foxtra = sizing.bind(output)(foxtra, oscard);
                oscard = _closure1_slot8;
                foxtra = backup.bind(kiloes)(foxtra, oscard);
                oscard = _closure1_slot5;
                oscard = offset * oscard;
                oscard = foxtra + oscard;
                foxtra = option + oscard;
                kiloes = 0;
                if(!(kiloes !== golfie)) { _fun00038_ip = 218; continue _fun00037 }
 163:
                sizing = yankee.Math;
                backup = sizing.floor;
                oscard = tangon[romeon];
                output = oscard.end;
                oscard = tangon[romeon];
                oscard = oscard.start;
                output = output - oscard;
                oscard = foxtra - option;
                oscard = oscard - output;
                oscard = oscard / offset;
                oscard = option + oscard;
                kiloes = backup.bind(sizing)(oscard);
 218:
                backup = tangon.push;
                oscard = {};
                oscard['start'] = option;
                oscard['end'] = foxtra;
                oscard['scrollStart'] = kiloes;
                oscard = backup.bind(tangon)(oscard);
                golfie = golfie + 1;
                oscard = report.length;
                option = foxtra;
                if(golfie < oscard) { _fun00038_ip = 45; continue _fun00037 }
 261:
                michal = _closure1_slot33;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(report, entity, tangon);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useMediaViewerSyncer'] = michal;
    return entity;
})();