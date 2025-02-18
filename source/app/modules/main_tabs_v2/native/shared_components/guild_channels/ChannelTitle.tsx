// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyleProperties;
    tangon = {};
    offset = 4;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.INTERACTIVE_MUTED;
    tangon['muted'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.REDESIGN_CHANNEL_NAME_MUTED_TEXT;
    tangon['normal'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.REDESIGN_CHANNEL_NAME_TEXT;
    tangon['unreadOrConnected'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot5 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: ChannelTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.title;
            romeon = entity.muted;
            var _closure2_slot0 = romeon;
            kiloes = entity.unread;
            var _closure2_slot1 = kiloes;
            yankee = entity.resolvedUnreadSetting;
            var _closure2_slot2 = yankee;
            foxtra = entity.connected;
            var _closure2_slot3 = foxtra;
            verify = entity.layout;
            michal = _closure1_slot0;
            option = _closure1_slot1;
            tangon = 5;
            report = option[tangon];
            tangon = undefined;
            golfie = michal.bind(tangon)(report);
            report = golfie.getLayoutStyles;
            golfie = report.bind(golfie)(verify);
            report = _closure1_slot5;
            backup = report.bind(tangon)();
            var _closure2_slot4 = backup;
            offset = _closure1_slot2;
            verify = offset.useMemo;
            report = new Array(5);
            report[0] = kiloes;
            report[1] = backup;
            report[2] = foxtra;
            report[3] = romeon;
            report[4] = yankee;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.normal;
                    zuuluu = _closure2_slot0;
                    if(zuuluu) { _fun00004_ip = 70; continue _fun00003 }
 20:
                    zuuluu = _closure2_slot1;
                    if(!zuuluu) { _fun00004_ip = 48; continue _fun00003 }
 27:
                    report = _closure2_slot2;
                    tangon = _closure1_slot3;
                    tangon = tangon.ALL_MESSAGES;
                    zuuluu = report === tangon;
 48:
                    if(zuuluu) { _fun00004_ip = 55; continue _fun00003 }
 51:
                    zuuluu = _closure2_slot3;
 55:
                    if(!zuuluu) { _fun00004_ip = 80; continue _fun00003 }
 58:
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.unreadOrConnected;
                    _fun00004_ip = 80; continue _fun00003;
 70:
                    entity = _closure2_slot4;
                    michal = entity.muted;
 80:
                    entity = {'color': null, 'paddingRight': 4, 'flexShrink': 1};
                    entity['color'] = michal;
                    return entity;
                }
            };
            report = verify.bind(offset)(zuuluu, report);
            zuuluu = _closure1_slot4;
            entity = 6;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Text;
            entity = {'variant': null, 'lineClamp': 1, 'maxFontSizeMultiplier': 1.75};
            golfie = golfie.channelName;
            golfie = golfie.text;
            golfie = golfie.variant;
            entity['variant'] = golfie;
            entity['style'] = report;
            report = null;
            golfie = report != oscard;
            report = '';
            if(!golfie) { _fun00002_ip = 227; continue _fun00001 }
 224:
            report = oscard;
 227:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();