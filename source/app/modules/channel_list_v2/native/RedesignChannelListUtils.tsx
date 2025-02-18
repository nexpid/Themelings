// app/modules/channel_list_v2/native/RedesignChannelListUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_list_v2/native/RedesignChannelListUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) {
        entity = argBar;
        michal = entity.height;
        entity = argFoo;
        entity['size'] = michal;
        entity = undefined;
        return entity;
    };
    zuuluu['redesignChannelListOverrideItemLayout'] = tangon;
    tangon = function(argFoo) {
        entity = argFoo;
        entity = entity.itemKey;
        return entity;
    };
    zuuluu['redesignChannelListKeyExtractor'] = tangon;
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.kind;
            entity = 'channel';
            if(!(entity !== zuuluu)) { _fun00002_ip = 158; continue _fun00001 }
 19:
            zuuluu = michal.kind;
            entity = 'sectionFooterVoice';
            if(!(entity === zuuluu)) { _fun00002_ip = 52; continue _fun00001 }
 34:
            entity = michal.activeVoiceChannels;
            zuuluu = entity.length;
            entity = 1;
            if(!(entity !== zuuluu)) { _fun00002_ip = 115; continue _fun00001 }
 52:
            zuuluu = michal.kind;
            entity = 'sectionHeaderCategory';
            if(!(entity !== zuuluu)) { _fun00002_ip = 74; continue _fun00001 }
 67:
            entity = michal.kind;
            _fun00002_ip = 113; continue _fun00001;
 74:
            golfie = michal.kind;
            oscard = michal.isFirstCategory;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            report = zuuluu.concat;
            tangon = '';
            zuuluu = '-';
            entity = report.bind(tangon)(golfie, zuuluu, oscard);
 113:
            _fun00002_ip = 156; continue _fun00001;
 115:
            tangon = michal.activeVoiceChannels;
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            report = zuuluu.type;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = 'channel-';
            entity = tangon.bind(zuuluu)(report);
 156:
            _fun00002_ip = 201; continue _fun00001;
 158:
            oscard = michal.kind;
            michal = michal.channel;
            report = michal.type;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            entity = tangon.bind(zuuluu)(oscard, michal, report);
 201:
            return entity;
        }
    };
    zuuluu['getRedesignChannelListItemType'] = michal;
    return entity;
})();