// app/modules/voice_calls/native/components/VoiceCallBlurGrid.tsx
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
    golfie = tangon.View;
    var _closure1_slot3 = golfie;
    golfie = tangon.ImageBackground;
    var _closure1_slot4 = golfie;
    option = tangon.StyleSheet;
    var _closure1_slot5 = option;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot9 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    golfie = option.create;
    tangon = {};
    verify = {};
    backup = option.absoluteFillObject;
    kiloes = verify;
    offset = copyDataProperties(kiloes, backup);
    romeon = 0.5;
    offset = 'opacity';
    verify[offset] = romeon;
    offset = 6;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.unsafe_rawColors;
    yankee = offset.PRIMARY_600;
    offset = 'backgroundColor';
    verify[offset] = yankee;
    tangon['imageBackgroundCover'] = verify;
    verify = {'flex': 1, 'alignSelf': 'stretch'};
    tangon['avatar'] = verify;
    verify = {'flex': 1, 'alignSelf': 'stretch', 'flexDirection': 'row'};
    tangon['avatarRow'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    tangon = function(argFoo) { // Original name: AvatarRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.recipients;
            entity = entity.guildId;
            var _closure2_slot0 = entity;
            entity = null;
            if(!(entity != tangon)) { _fun00002_ip = 95; continue _fun00001 }
 26:
            report = tangon.length;
            zuuluu = 0;
            if(!(zuuluu !== report)) { _fun00002_ip = 95; continue _fun00001 }
 37:
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot8;
                    entity = zuuluu.getUser;
                    verify = entity.bind(zuuluu)(oscard);
                    entity = null;
                    zuuluu = entity == verify;
                    if(zuuluu) { _fun00004_ip = 85; continue _fun00003 }
 30:
                    report = _closure1_slot9;
                    tangon = _closure1_slot4;
                    zuuluu = {};
                    option = verify.getAvatarSource;
                    golfie = _closure2_slot0;
                    golfie = option.bind(verify)(golfie);
                    zuuluu['source'] = golfie;
                    michal = _closure1_slot11;
                    michal = michal.avatar;
                    zuuluu['style'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu, oscard);
 85:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            report = _closure1_slot9;
            tangon = _closure1_slot3;
            zuuluu = {};
            oscard = _closure1_slot11;
            oscard = oscard.avatarRow;
            zuuluu['style'] = oscard;
            zuuluu['children'] = michal;
            michal = undefined;
            michal = report.bind(michal)(tangon, zuuluu);
            return michal;
 95:
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/native/components/VoiceCallBlurGrid.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        michal = argFoo;
        verify = michal.channelId;
        var _closure2_slot0 = verify;
        romeon = michal.guildId;
        report = _closure1_slot0;
        yankee = _closure1_slot2;
        michal = 7;
        michal = yankee[michal];
        tangon = undefined;
        golfie = report.bind(tangon)(michal);
        oscard = golfie.useStateFromStoresArray;
        michal = _closure1_slot7;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = verify;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                if(!(entity != michal)) { _fun00006_ip = 43; continue _fun00005 }
 30:
                entity = michal.isPrivate;
                entity = entity.bind(michal)();
                if(entity) { _fun00006_ip = 49; continue _fun00005 }
 43:
                entity = new Array(0);
                _fun00006_ip = 71; continue _fun00005;
 49:
                report = michal.recipients;
                tangon = report.slice;
                zuuluu = 0;
                michal = 3;
                entity = tangon.bind(report)(zuuluu, michal);
 71:
                return entity;
            }
        };
        oscard = oscard.bind(golfie)(zuuluu, entity, michal);
        entity = oscard.shift;
        entity = entity.bind(oscard)();
        golfie = new Array(2);
        golfie[0] = entity;
        entity = oscard.shift;
        entity = entity.bind(oscard)();
        golfie[1] = entity;
        zuuluu = golfie.filter;
        entity = 8;
        michal = yankee[entity];
        michal = report.bind(tangon)(michal);
        michal = michal.isNotNullish;
        foxtra = zuuluu.bind(golfie)(michal);
        zuuluu = _closure1_slot6;
        michal = zuuluu.getId;
        michal = michal.bind(zuuluu)();
        zuuluu = new Array(2);
        zuuluu[0] = michal;
        michal = oscard.shift;
        michal = michal.bind(oscard)();
        zuuluu[1] = michal;
        michal = zuuluu.filter;
        entity = yankee[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.isNotNullish;
        oscard = michal.bind(zuuluu)(entity);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot3;
        entity = {};
        offset = _closure1_slot5;
        report = offset.absoluteFill;
        entity['style'] = report;
        golfie = _closure1_slot9;
        verify = _closure1_slot12;
        report = {};
        report['recipients'] = oscard;
        report['guildId'] = romeon;
        oscard = golfie.bind(tangon)(verify, report);
        report = new Array(4);
        report[0] = oscard;
        oscard = {};
        oscard['recipients'] = foxtra;
        oscard['guildId'] = romeon;
        oscard = golfie.bind(tangon)(verify, oscard);
        report[1] = oscard;
        verify = _closure1_slot1;
        oscard = 9;
        oscard = yankee[oscard];
        verify = verify.bind(tangon)(oscard);
        oscard = {};
        yankee = 'dark';
        oscard['blurTheme'] = yankee;
        offset = offset.absoluteFill;
        oscard['style'] = offset;
        oscard = golfie.bind(tangon)(verify, oscard);
        report[2] = oscard;
        oscard = {};
        option = _closure1_slot11;
        option = option.imageBackgroundCover;
        oscard['style'] = option;
        oscard = golfie.bind(tangon)(michal, oscard);
        report[3] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();