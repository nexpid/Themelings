// app/modules/messages/native/emoji/EmojiGrid.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
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
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'height': 40, 'width': 40};
    offset = 4;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.sm;
    verify['borderRadius'] = offset;
    tangon['gridEmojiFastImage'] = verify;
    verify = {'fontSize': 18, 'lineHeight': 44};
    tangon['gridEmojiText'] = verify;
    verify = {'marginTop': 16, 'flexDirection': 'row'};
    tangon['emojiGridRowContainer'] = verify;
    verify = {'marginTop': 8, 'alignItems': 'center'};
    tangon['emojiGridContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot5 = tangon;
    tangon = function(argFoo) { // Original name: Emoji
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.guildEmoji;
            michal = _closure1_slot5;
            report = undefined;
            oscard = michal.bind(report)();
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 7;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            verify = entity.id;
            golfie = null;
            if(!(golfie != verify)) { _fun00002_ip = 121; continue _fun00001 }
 59:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            golfie = 6;
            golfie = offset[golfie];
            offset = verify.bind(report)(golfie);
            verify = offset.getEmojiURL;
            golfie = {};
            yankee = entity.id;
            golfie['id'] = yankee;
            yankee = entity.animated;
            golfie['animated'] = yankee;
            yankee = 48;
            golfie['size'] = yankee;
            golfie = verify.bind(offset)(golfie);
            _fun00002_ip = 157; continue _fun00001;
 121:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 5;
            option = offset[option];
            offset = verify.bind(report)(option);
            verify = offset.getURL;
            option = entity.name;
            golfie = verify.bind(offset)(option);
 157:
            michal['src'] = golfie;
            golfie = oscard.gridEmojiFastImage;
            michal['fastImageStyle'] = golfie;
            oscard = oscard.gridEmojiText;
            michal['textEmojiStyle'] = oscard;
            oscard = entity.name;
            michal['name'] = oscard;
            entity = entity.id;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/emoji/EmojiGrid.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.expressionSourceGuild;
            zuuluu = entity.doNotDisplayEmojiIds;
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00004_ip = 27; continue _fun00003 }
 23:
            zuuluu = new Array(0);
 27:
            var _closure2_slot0 = zuuluu;
            offset = entity.numberToShow;
            if(!(offset === tangon)) { _fun00004_ip = 46; continue _fun00003 }
 43:
            offset = 10;
 46:
            zuuluu = entity.maxPerRow;
            if(!(zuuluu === tangon)) { _fun00004_ip = 59; continue _fun00003 }
 56:
            zuuluu = 5;
 59:
            var _closure2_slot1 = tangon;
            oscard = {};
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            option = 8;
            entity = entity[option];
            verify = verify.bind(tangon)(entity);
            entity = verify.useSharedMessageEmojiStyles;
            romeon = entity.bind(verify)();
            foxtra = oscard;
            entity = copyDataProperties(foxtra, romeon);
            entity = _closure1_slot5;
            romeon = entity.bind(tangon)();
            foxtra = oscard;
            entity = copyDataProperties(foxtra, romeon);
            _closure2_slot1 = oscard;
            entity = null;
            verify = entity == michal;
            yankee = undefined;
            if(verify) { _fun00004_ip = 141; continue _fun00003 }
 135:
            yankee = michal.emojis;
 141:
            if(!(entity == yankee)) { _fun00004_ip = 149; continue _fun00003 }
 145:
            yankee = new Array(0);
 149:
            michal = yankee.slice;
            entity = 1;
            entity = offset + entity;
            verify = 0;
            yankee = michal.bind(yankee)(verify, entity);
            michal = yankee.filter;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            michal = michal.bind(yankee)(entity);
            entity = michal.slice;
            michal = entity.bind(michal)(verify, offset);
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 9;
            entity = offset[entity];
            entity = verify.bind(tangon)(entity);
            verify = entity.bind(tangon)(michal, zuuluu);
            zuuluu = _closure1_slot4;
            michal = _closure1_slot3;
            entity = {};
            oscard = oscard.emojiGridContainer;
            entity['style'] = oscard;
            oscard = _closure1_slot0;
            report = 10;
            report = offset[report];
            report = oscard.bind(tangon)(report);
            oscard = report.GappedList;
            report = {};
            report['gap'] = option;
            option = verify.map;
            golfie = function(argFoo, argBar) {
                verify = argFoo;
                report = _closure1_slot4;
                tangon = _closure1_slot3;
                zuuluu = {};
                michal = _closure2_slot1;
                michal = michal.emojiGridRowContainer;
                zuuluu['style'] = michal;
                oscard = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 10;
                entity = michal[entity];
                michal = undefined;
                entity = oscard.bind(michal)(entity);
                oscard = entity.GappedList;
                entity = {};
                golfie = 32;
                entity['gap'] = golfie;
                option = verify.map;
                golfie = function(argFoo) {
                    entity = argFoo;
                    report = _closure1_slot4;
                    tangon = _closure1_slot6;
                    zuuluu = {};
                    zuuluu['guildEmoji'] = entity;
                    michal = entity.id;
                    entity = undefined;
                    entity = report.bind(entity)(tangon, zuuluu, michal);
                    return entity;
                };
                golfie = option.bind(verify)(golfie);
                entity['children'] = golfie;
                entity = report.bind(michal)(oscard, entity);
                zuuluu['children'] = entity;
                entity = argBar;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            };
            golfie = option.bind(verify)(golfie);
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['EmojiGrid'] = michal;
    return entity;
})();