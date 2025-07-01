// app/modules/forums/native/ForumPost.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: ForumPostGrid
        entity = argFoo;
        yankee = entity.firstMessage;
        offset = entity.hasUnreads;
        kiloes = entity.isNew;
        sizing = entity.media;
        verify = entity.parentChannel;
        romeon = entity.thread;
        tangon = _closure1_slot8;
        zuuluu = _closure1_slot7;
        michal = {};
        backup = _closure1_slot6;
        golfie = _closure1_slot1;
        foxtra = _closure1_slot2;
        entity = 5;
        report = foxtra[entity];
        entity = undefined;
        option = golfie.bind(entity)(report);
        report = {};
        report['thread'] = romeon;
        report['hasUnreads'] = offset;
        report['isNew'] = kiloes;
        option = backup.bind(entity)(option, report);
        report = new Array(3);
        report[0] = option;
        kiloes = _closure1_slot6;
        option = 6;
        option = foxtra[option];
        backup = golfie.bind(entity)(option);
        option = {};
        option['thread'] = romeon;
        option['hasUnreads'] = offset;
        option['media'] = sizing;
        option = kiloes.bind(entity)(backup, option);
        report[1] = option;
        option = _closure1_slot6;
        oscard = 7;
        oscard = foxtra[oscard];
        golfie = golfie.bind(entity)(oscard);
        oscard = {};
        oscard['thread'] = romeon;
        oscard['firstMessage'] = yankee;
        oscard['hasUnreads'] = offset;
        oscard['parentChannel'] = verify;
        oscard = option.bind(entity)(golfie, oscard);
        report[2] = oscard;
        michal['children'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = golfie[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(option);
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.useForumChannelStore;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.jsx;
    var _closure1_slot6 = report;
    report = tangon.Fragment;
    var _closure1_slot7 = report;
    tangon = tangon.jsxs;
    var _closure1_slot8 = tangon;
    report = option.memo;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.threadId;
            var _closure2_slot0 = zuuluu;
            option = michal.style;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 8;
            zuuluu = report[michal];
            oscard = undefined;
            romeon = tangon.bind(oscard)(zuuluu);
            yankee = romeon.useStateFromStores;
            verify = _closure1_slot3;
            offset = new Array(1);
            offset[0] = verify;
            zuuluu = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = yankee.bind(romeon)(offset, zuuluu);
            offset = _closure1_slot1;
            zuuluu = 9;
            zuuluu = report[zuuluu];
            yankee = offset.bind(oscard)(zuuluu);
            foxtra = null;
            offset = foxtra != sizing;
            zuuluu = '[Forum Post] The thread should not be null here. A store must have missed an update.';
            zuuluu = yankee.bind(oscard)(offset, zuuluu);
            offset = sizing.parent_id;
            var _closure2_slot1 = offset;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.bind(oscard)(offset);
            zuuluu = zuuluu.layoutType;
            offset = report[michal];
            romeon = tangon.bind(oscard)(offset);
            yankee = romeon.useStateFromStores;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            kiloes = yankee.bind(romeon)(offset, verify);
            verify = 10;
            verify = report[verify];
            offset = tangon.bind(oscard)(verify);
            verify = offset.useFirstForumPostMessage;
            verify = verify.bind(offset)(sizing);
            backup = verify.firstMessage;
            var _closure2_slot2 = backup;
            result = verify.loaded;
            verify = 11;
            offset = report[verify];
            yankee = tangon.bind(oscard)(offset);
            offset = yankee.useForumPostReadStates;
            yankee = offset.bind(yankee)(sizing);
            offset = yankee.isNew;
            romeon = yankee.hasUnreads;
            verify = report[verify];
            output = tangon.bind(oscard)(verify);
            yankee = output.useForumPostFirstMessageMarkup;
            verify = {};
            verify['firstMessage'] = backup;
            verify = yankee.bind(output)(verify);
            source = verify.content;
            output = verify.hasSpoilerEmbeds;
            verify = 14;
            yankee = report[verify];
            echoed = tangon.bind(oscard)(yankee);
            yankee = echoed.useForumPostMediaThumbnail;
            echoed = yankee.bind(echoed)(backup, kiloes, output);
            verify = report[verify];
            yankee = tangon.bind(oscard)(verify);
            verify = yankee.useFirstMediaIsEmbed;
            update = verify.bind(yankee)(backup, output);
            michal = report[michal];
            report = tangon.bind(oscard)(michal);
            tangon = report.useStateFromStoresObject;
            verify = _closure1_slot4;
            michal = new Array(1);
            michal[0] = verify;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = {};
                    michal = _closure2_slot2;
                    tangon = null;
                    michal = tangon != michal;
                    if(!michal) { _fun00004_ip = 40; continue _fun00003 }
 18:
                    golfie = _closure1_slot4;
                    oscard = golfie.isBlockedForMessage;
                    report = _closure2_slot2;
                    michal = oscard.bind(golfie)(report);
 40:
                    entity['isBlocked'] = michal;
                    michal = _closure2_slot2;
                    michal = tangon != michal;
                    if(!michal) { _fun00004_ip = 78; continue _fun00003 }
 56:
                    report = _closure1_slot4;
                    tangon = report.isIgnoredForMessage;
                    zuuluu = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu);
 78:
                    entity['isIgnored'] = michal;
                    return entity;
                }
            };
            entity = tangon.bind(report)(michal, entity);
            yankee = entity.isBlocked;
            michal = entity.isIgnored;
            entity = null;
            if(!result) { _fun00002_ip = 852; continue _fun00001 }
 387:
            if(yankee) { _fun00002_ip = 700; continue _fun00001 }
 393:
            if(michal) { _fun00002_ip = 700; continue _fun00001 }
 399:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 15;
            michal = report[michal];
            michal = tangon.bind(oscard)(michal);
            michal = michal.ForumLayout;
            michal = michal.GRID;
            if(!(zuuluu === michal)) { _fun00002_ip = 449; continue _fun00001 }
 435:
            zuuluu = echoed.length;
            michal = 0;
            if(!(!(zuuluu > michal))) { _fun00002_ip = 593; continue _fun00001 }
 449:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot0;
            ctrled = _closure1_slot2;
            michal = 12;
            michal = ctrled[michal];
            michal = zuuluu.bind(oscard)(michal);
            zuuluu = michal.ForumPostPressableContainer;
            michal = {};
            michal['style'] = option;
            report = sizing.id;
            michal['threadId'] = report;
            output = _closure1_slot6;
            verify = _closure1_slot1;
            report = 13;
            report = ctrled[report];
            verify = verify.bind(oscard)(report);
            report = {};
            report['thread'] = sizing;
            report['parentChannel'] = kiloes;
            report['firstMessage'] = backup;
            report['messageContent'] = source;
            source = 0;
            source = echoed[source];
            report['media'] = source;
            report['isEmbed'] = update;
            report['hasUnreads'] = romeon;
            report['isNew'] = offset;
            report['firstMessageLoaded'] = result;
            result = false;
            report['isLocalDeviceMedia'] = result;
            report = output.bind(oscard)(verify, report);
            michal['children'] = report;
            michal = tangon.bind(oscard)(zuuluu, michal);
            _fun00002_ip = 695; continue _fun00001;
 593:
            report = _closure1_slot6;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 12;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = zuuluu.ForumPostPressableContainer;
            zuuluu = {};
            zuuluu['style'] = option;
            verify = sizing.id;
            zuuluu['threadId'] = verify;
            result = _closure1_slot6;
            output = _closure1_slot9;
            verify = {};
            verify['thread'] = sizing;
            verify['media'] = echoed;
            verify['parentChannel'] = kiloes;
            verify['firstMessage'] = backup;
            verify['hasUnreads'] = romeon;
            verify['isNew'] = offset;
            verify = result.bind(oscard)(output, verify);
            zuuluu['children'] = verify;
            michal = report.bind(oscard)(tangon, zuuluu);
 695:
            _fun00002_ip = 849; continue _fun00001;
 700:
            report = _closure1_slot6;
            tangon = _closure1_slot0;
            output = _closure1_slot2;
            zuuluu = 12;
            zuuluu = output[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = zuuluu.ForumPostPressableContainer;
            zuuluu = {};
            zuuluu['style'] = option;
            option = sizing.id;
            zuuluu['threadId'] = option;
            verify = _closure1_slot6;
            option = _closure1_slot1;
            golfie = 13;
            golfie = output[golfie];
            option = option.bind(oscard)(golfie);
            golfie = {};
            golfie['thread'] = sizing;
            golfie['parentChannel'] = kiloes;
            golfie['firstMessage'] = backup;
            golfie['messageContent'] = foxtra;
            golfie['media'] = foxtra;
            golfie['hasUnreads'] = romeon;
            golfie['isNew'] = offset;
            offset = true;
            golfie['firstMessageLoaded'] = offset;
            offset = false;
            golfie['isLocalDeviceMedia'] = offset;
            offset = 'ignored';
            if(!yankee) { _fun00002_ip = 828; continue _fun00001 }
 824:
            offset = 'blocked';
 828:
            golfie['senderModifier'] = offset;
            golfie = verify.bind(oscard)(option, golfie);
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 849:
            entity = michal;
 852:
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/forums/native/ForumPost.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: ForumPostListDisabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golfie = entity.style;
            verify = entity.localDeviceMedia;
            entity = entity.threadId;
            var _closure2_slot0 = entity;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            option = 8;
            entity = tangon[option];
            report = undefined;
            foxtra = zuuluu.bind(report)(entity);
            yankee = foxtra.useStateFromStores;
            romeon = _closure1_slot3;
            offset = new Array(1);
            offset[0] = romeon;
            entity = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            backup = yankee.bind(foxtra)(offset, entity);
            var _closure2_slot1 = backup;
            offset = _closure1_slot1;
            entity = 9;
            entity = tangon[entity];
            foxtra = offset.bind(report)(entity);
            entity = null;
            yankee = entity != backup;
            offset = '[Forum Post] The thread should not be null here. A store must have missed an update.';
            offset = foxtra.bind(report)(yankee, offset);
            option = tangon[option];
            yankee = zuuluu.bind(report)(option);
            offset = yankee.useStateFromStores;
            option = new Array(1);
            option[0] = romeon;
            michal = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = entity.parent_id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = offset.bind(yankee)(option, michal);
            michal = 10;
            michal = tangon[michal];
            option = zuuluu.bind(report)(michal);
            michal = option.useFirstForumPostMessage;
            michal = michal.bind(option)(backup);
            romeon = michal.firstMessage;
            offset = michal.loaded;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.useForumPostFirstMessageMarkup;
            michal = {};
            michal['firstMessage'] = romeon;
            michal = zuuluu.bind(tangon)(michal);
            yankee = michal.content;
            if(!offset) { _fun00006_ip = 353; continue _fun00005 }
 230:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 12;
            michal = kiloes[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.ForumPostDisabledContainer;
            michal = {};
            michal['style'] = golfie;
            option = _closure1_slot6;
            golfie = _closure1_slot1;
            oscard = 13;
            oscard = kiloes[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            oscard['thread'] = backup;
            oscard['parentChannel'] = foxtra;
            oscard['firstMessage'] = romeon;
            oscard['messageContent'] = yankee;
            oscard['media'] = verify;
            verify = true;
            oscard['hasUnreads'] = verify;
            yankee = false;
            oscard['isNew'] = yankee;
            oscard['firstMessageLoaded'] = offset;
            oscard['isLocalDeviceMedia'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 353:
            return entity;
        }
    };
    zuuluu['ForumPostListDisabled'] = michal;
    return entity;
})();