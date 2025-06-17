// app/modules/messages/native/renderer/RowGenerator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.RowType;
    var _closure1_slot6 = golfie;
    golfie = tangon.SeparatorType;
    var _closure1_slot7 = golfie;
    tangon = tangon.LoadingType;
    var _closure1_slot8 = tangon;
    tangon = {'constrainedWidth': 0, 'animatingStickerMessageId': null, 'forcedTheme': null, 'shouldObscureSpoiler': true, 'shouldDisableInteractiveComponents': true, 'shouldFilterKeywords': false};
    golfie = 4;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    yankee = golfie.DEFAULT_OPTIONS;
    romeon = tangon;
    golfie = copyDataProperties(romeon, yankee);
    var _closure1_slot9 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: RowManager
            zuuluu = this;
            report = _closure1_slot3;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            michal = _closure1_slot9;
            zuuluu['options'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'setOptions';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            zuuluu = this;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 5;
            tangon = tangon[entity];
            entity = undefined;
            option = report.bind(entity)(tangon);
            golfie = option.merge;
            yankee = _closure1_slot9;
            offset = zuuluu.options;
            romeon = {};
            verify = argFoo;
            foxtra = option;
            michal = foxtra[golfie](romeon, yankee, offset, verify, option);
            zuuluu['options'] = michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'generate';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                tangon = this;
                option = report.rowType;
                entity = tangon.options;
                zuuluu = entity.forcedTheme;
                entity = null;
                if(!(entity == zuuluu)) { _fun00002_ip = 41; continue _fun00001 }
 29:
                entity = _closure1_slot5;
                zuuluu = entity.theme;
 41:
                michal = _closure1_slot6;
                michal = michal.BLOCKED_GROUP;
                if(!(michal !== option)) { _fun00002_ip = 376; continue _fun00001 }
 61:
                michal = _closure1_slot6;
                michal = michal.IGNORED_GROUP;
                if(!(michal !== option)) { _fun00002_ip = 376; continue _fun00001 }
 78:
                michal = _closure1_slot6;
                michal = michal.MESSAGE;
                if(!(michal !== option)) { _fun00002_ip = 334; continue _fun00001 }
 95:
                michal = _closure1_slot6;
                michal = michal.UPLOAD_PROGRESS;
                if(!(michal !== option)) { _fun00002_ip = 292; continue _fun00001 }
 112:
                michal = _closure1_slot7;
                michal = michal.DAY;
                if(!(michal !== option)) { _fun00002_ip = 256; continue _fun00001 }
 129:
                michal = _closure1_slot7;
                michal = michal.UNREAD;
                if(!(michal !== option)) { _fun00002_ip = 256; continue _fun00001 }
 143:
                michal = _closure1_slot7;
                michal = michal.SUMMARY;
                if(!(michal !== option)) { _fun00002_ip = 256; continue _fun00001 }
 157:
                michal = _closure1_slot8;
                michal = michal.LOAD_BEFORE;
                if(!(michal !== option)) { _fun00002_ip = 220; continue _fun00001 }
 171:
                michal = _closure1_slot8;
                michal = michal.LOAD_AFTER;
                if(!(michal !== option)) { _fun00002_ip = 220; continue _fun00001 }
 185:
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 11;
                oscard = oscard[michal];
                michal = undefined;
                golfie = golfie.bind(michal)(oscard);
                oscard = golfie.assertNever;
                oscard = oscard.bind(golfie)(option);
                return michal;
 220:
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 10;
                oscard = oscard[michal];
                michal = undefined;
                oscard = golfie.bind(michal)(oscard);
                michal = oscard.generateLoadingRowData;
                michal = michal.bind(oscard)(report, zuuluu);
                return michal;
 256:
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 9;
                oscard = oscard[michal];
                michal = undefined;
                oscard = golfie.bind(michal)(oscard);
                michal = oscard.generateSeparatorRowData;
                michal = michal.bind(oscard)(report, zuuluu);
                return michal;
 292:
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 8;
                oscard = oscard[michal];
                michal = undefined;
                golfie = golfie.bind(michal)(oscard);
                oscard = golfie.generateUploadProgressRowData;
                michal = tangon.options;
                michal = oscard.bind(golfie)(report, michal, zuuluu);
                return michal;
 334:
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 7;
                oscard = oscard[michal];
                michal = undefined;
                golfie = golfie.bind(michal)(oscard);
                oscard = golfie.generateMessageRowData;
                michal = tangon.options;
                michal = oscard.bind(golfie)(report, michal, zuuluu);
                return michal;
 376:
                oscard = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                michal = oscard.bind(entity)(michal);
                entity = michal.generateBlockedGroupRowData;
                entity = entity.bind(michal)(report, zuuluu, tangon);
                return entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/RowGenerator.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();