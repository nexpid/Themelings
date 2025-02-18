// app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
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
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    report = option.memo;
    tangon = function(argFoo) { // Original name: MessagesItemChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.channelId;
            var _closure2_slot0 = zuuluu;
            oscard = michal.placeholderHeight;
            option = michal.row;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 6;
            zuuluu = report[zuuluu];
            report = undefined;
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.useStateFromStores;
            verify = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = tangon.bind(golfie)(zuuluu, entity);
            entity = null;
            entity = entity == golfie;
            zuuluu = undefined;
            if(entity) { _fun00002_ip = 102; continue _fun00001 }
 92:
            entity = golfie.isPrivate;
            zuuluu = entity.bind(golfie)();
 102:
            entity = true;
            if(!(entity !== zuuluu)) { _fun00002_ip = 151; continue _fun00001 }
 108:
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 7;
            entity = verify[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['height'] = oscard;
            entity['row'] = option;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 191; continue _fun00001;
 151:
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 5;
            michal = option[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['channel'] = golfie;
            michal['height'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 191:
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getMessagesItemChannelSizes
        zuuluu = argFoo;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        michal = 3;
        tangon = verify[michal];
        golfie = undefined;
        tangon = option.bind(golfie)(tangon);
        tangon = tangon.TextStyleSheet;
        tangon = tangon.redesign/channel-title/semibold;
        tangon = tangon.lineHeight;
        tangon = tangon * zuuluu;
        michal = verify[michal];
        michal = option.bind(golfie)(michal);
        michal = michal.TextStyleSheet;
        michal = michal.text-xs/medium;
        michal = michal.lineHeight;
        zuuluu = michal * zuuluu;
        report = _closure1_slot1;
        entity = 4;
        michal = verify[entity];
        michal = report.bind(golfie)(michal);
        michal = michal.spacing;
        michal = michal.PX_16;
        entity = verify[entity];
        entity = report.bind(golfie)(entity);
        entity = entity.spacing;
        yankee = entity.PX_32;
        entity = {};
        entity['avatar'] = yankee;
        report = global;
        offset = report.Math;
        oscard = offset.max;
        report = tangon + zuuluu;
        report = oscard.bind(offset)(yankee, report);
        oscard = report + michal;
        report = 5;
        report = verify[report];
        report = option.bind(golfie)(report);
        report = report.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
        report = oscard + report;
        entity['height'] = report;
        entity['label'] = tangon;
        entity['labelSecondary'] = zuuluu;
        entity['padding'] = michal;
        return entity;
    };
    zuuluu['getMessagesItemChannelSizes'] = michal;
    return entity;
})();