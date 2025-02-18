// app/modules/search_v2/native/components/list/rows/GuildTextChannelRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CHANNEL_LIST_SEARCH_LAYOUT;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: GuildTextChannelRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            option = report.channel;
            var _closure2_slot0 = option;
            golfie = report.trailing;
            verify = report.lastMessageId;
            yankee = report.onPress;
            var _closure2_slot1 = yankee;
            tangon = {'channel': 0, 'trailing': 0, 'lastMessageId': 0, 'onPress': 0};
            zuuluu = null;
            sizing = tangon;
            kiloes = null;
            entity = silentSetPrototypeOf(sizing, kiloes);
            sizing = {};
            kiloes = report;
            backup = tangon;
            report = copyDataProperties(sizing, kiloes, backup);
            tangon = undefined;
            var _closure2_slot4 = tangon;
            foxtra = option.id;
            var _closure2_slot2 = foxtra;
            romeon = option.guild_id;
            var _closure2_slot3 = romeon;
            entity = zuuluu != verify;
            if(!entity) { _fun00002_ip = 133; continue _fun00001 }
 99:
            oscard = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 3;
            entity = offset[entity];
            oscard = oscard.bind(tangon)(entity);
            entity = oscard.extractTimestamp;
            zuuluu = entity.bind(oscard)(verify);
 133:
            _closure2_slot4 = zuuluu;
            offset = _closure1_slot3;
            verify = offset.useMemo;
            oscard = new Array(3);
            oscard[0] = foxtra;
            oscard[1] = romeon;
            oscard[2] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 4;
                    entity = zuuluu[entity];
                    verify = undefined;
                    zuuluu = michal.bind(verify)(entity);
                    michal = zuuluu.renderChannelSubtitle;
                    entity = {};
                    golfie = _closure2_slot4;
                    oscard = null;
                    golfie = oscard != golfie;
                    if(!golfie) { _fun00004_ip = 84; continue _fun00003 }
 49:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    golfie = 5;
                    golfie = offset[golfie];
                    verify = option.bind(verify)(golfie);
                    option = verify.getChannelActiveAgoTimestamp;
                    golfie = _closure2_slot4;
                    oscard = option.bind(verify)(golfie);
 84:
                    entity['subtitle'] = oscard;
                    report = _closure1_slot4;
                    entity['layout'] = report;
                    report = _closure2_slot2;
                    entity['channelId'] = report;
                    tangon = _closure2_slot3;
                    entity['guildId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            verify = verify.bind(offset)(zuuluu, oscard);
            oscard = offset.useCallback;
            romeon = option.id;
            zuuluu = new Array(2);
            zuuluu[0] = romeon;
            zuuluu[1] = yankee;
            michal = function() {
                zuuluu = _closure2_slot1;
                entity = _closure2_slot0;
                michal = entity.id;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            oscard = oscard.bind(offset)(michal, zuuluu);
            zuuluu = _closure1_slot5;
            michal = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 6;
            entity = offset[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            sizing = entity;
            kiloes = report;
            report = copyDataProperties(sizing, kiloes);
            report = 'subtitle';
            entity[report] = verify;
            report = 'channel';
            entity[report] = option;
            report = 'trailing';
            entity[report] = golfie;
            report = 'onPress';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/list/rows/GuildTextChannelRow.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();