// app/modules/channel/native/openChannelPicker.tsx
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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/native/openChannelPicker.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: openChannelPicker
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            golfie = report.selectedChannel;
            romeon = report.guildId;
            oscard = report.channelType;
            yankee = report.filterFn;
            entity = undefined;
            if(!(yankee === entity)) { _fun00002_ip = 41; continue _fun00001 }
 34:
            yankee = function() { // Original name: h
                entity = true;
                return entity;
            };
 41:
            foxtra = report.onClose;
            zuuluu = {'selectedChannel': 0, 'guildId': 0, 'channelType': 0, 'filterFn': 0, 'onClose': 0};
            tangon = null;
            source = zuuluu;
            update = null;
            michal = silentSetPrototypeOf(source, update);
            source = {};
            update = report;
            echoed = zuuluu;
            michal = copyDataProperties(source, update, echoed);
            verify = _closure1_slot4;
            report = verify.getGuild;
            verify = report.bind(verify)(romeon);
            offset = _closure1_slot3;
            report = offset.getChannels;
            report = report.bind(offset)(romeon);
            offset = report[oscard];
            if(!(tangon == offset)) { _fun00002_ip = 128; continue _fun00001 }
 124:
            offset = new Array(0);
 128:
            report = _closure1_slot1;
            result = _closure1_slot2;
            tangon = 2;
            tangon = result[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.openLazy;
            output = _closure1_slot0;
            zuuluu = 4;
            zuuluu = result[zuuluu];
            romeon = output.bind(entity)(zuuluu);
            zuuluu = 3;
            tangon = result[zuuluu];
            zuuluu = result.paths;
            tangon = romeon.bind(entity)(tangon, zuuluu);
            zuuluu = {};
            romeon = {};
            backup = 5;
            kiloes = result[backup];
            kiloes = output.bind(entity)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            backup = result[backup];
            backup = output.bind(entity)(backup);
            backup = backup.t;
            backup = backup.r2pts7;
            backup = kiloes.bind(sizing)(backup);
            romeon['title'] = backup;
            romeon['onClose'] = foxtra;
            zuuluu['header'] = romeon;
            zuuluu['guild'] = verify;
            verify = offset.filter;
            offset = verify.bind(offset)(yankee);
            verify = offset.map;
            option = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                return entity;
            };
            option = verify.bind(offset)(option);
            zuuluu['channels'] = option;
            zuuluu['selectedChannel'] = golfie;
            source = zuuluu;
            update = michal;
            michal = copyDataProperties(source, update);
            michal = 'ChannelPicker';
            michal = report.bind(oscard)(tangon, michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();