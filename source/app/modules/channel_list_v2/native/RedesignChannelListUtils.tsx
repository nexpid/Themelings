// app/modules/channel_list_v2/native/RedesignChannelListUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/RedesignChannelListUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) {
        entity = argBar;
        mike = entity.height;
        entity = argFoo;
        entity['size'] = mike;
        entity = undefined;
        return entity;
    };
    zulu['redesignChannelListOverrideItemLayout'] = tango;
    tango = function(argFoo) {
        entity = argFoo;
        entity = entity.itemKey;
        return entity;
    };
    zulu['redesignChannelListKeyExtractor'] = tango;
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = mike.kind;
            entity = 'channel';
            if(!(entity !== zulu)) { _fun00002_ip = 158; continue _fun00001 }
 19:
            zulu = mike.kind;
            entity = 'sectionFooterVoice';
            if(!(entity === zulu)) { _fun00002_ip = 52; continue _fun00001 }
 34:
            entity = mike.activeVoiceChannels;
            zulu = entity.length;
            entity = 1;
            if(!(entity !== zulu)) { _fun00002_ip = 115; continue _fun00001 }
 52:
            zulu = mike.kind;
            entity = 'sectionHeaderCategory';
            if(!(entity !== zulu)) { _fun00002_ip = 74; continue _fun00001 }
 67:
            entity = mike.kind;
            _fun00002_ip = 113; continue _fun00001;
 74:
            golf = mike.kind;
            oscar = mike.isFirstCategory;
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = '';
            zulu = '-';
            entity = report.bind(tango)(golf, zulu, oscar);
 113:
            _fun00002_ip = 156; continue _fun00001;
 115:
            tango = mike.activeVoiceChannels;
            zulu = 0;
            zulu = tango[zulu];
            report = zulu.type;
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = 'channel-';
            entity = tango.bind(zulu)(report);
 156:
            _fun00002_ip = 201; continue _fun00001;
 158:
            oscar = mike.kind;
            mike = mike.channel;
            report = mike.type;
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = '-';
            entity = tango.bind(zulu)(oscar, mike, report);
 201:
            return entity;
        }
    };
    zulu['getRedesignChannelListItemType'] = mike;
    return entity;
})();