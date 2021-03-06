import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import SignleTagVideo from './components/SignleTagVideo';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import { useExecutionContext } from '../../form/components/ExecutionContext';

export default function TagVideo({
  src,
  name,
  value,
  options,
  initial,
  readOnly,
  startTime,
  playbackRate,
  hideControls,
  autoPlay,
  onChange,
}) {
  const { onModuleError } = useExecutionContext();
  const change = useCallback(
    (tag) => {
      if (!readOnly) {
        onChange(name, tag);
      }
    },
    [name, onChange, readOnly]
  );

  const handleError = useCallback(() => {
    onModuleError(`${name}: Error while loading audio ${src}`);
  }, [name, onModuleError, src]);

  const tag = readOnly ? initial : value;

  return (
    <SignleTagVideo
      key={src}
      hideControls={hideControls}
      autoPlay={autoPlay}
      startTime={typeof startTime === 'string' ? +startTime : startTime}
      playbackRate={playbackRate}
      video={src}
      readOnly={readOnly}
      tag={tag}
      options={options}
      onChange={change}
      onError={handleError}
    />
  );
}

TagVideo.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    tag: PropTypes.string,
  }),
  readOnly: PropTypes.bool,
  initial: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    tag: PropTypes.string,
  }),
  autoPlay: PropTypes.bool,
  hideControls: PropTypes.bool,
  playbackRate: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.string),
  startTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
};

TagVideo.defaultProps = {
  value: null,
  initial: null,
  hideControls: false,
  readOnly: false,
  autoPlay: false,
  playbackRate: 1,
  options: [],
  startTime: undefined,
};

TagVideo.module = {
  type: 'tagVideo',
  name: 'Video Tagging',
  isInput: true,
  validation: {
    isRequired: (value) => {
      if (!value) {
        return false;
      }
      if (!value.tag) {
        return false;
      }
      return true;
    },
  },
  report: ['video is not loading'],
  editor: {
    category: ModuleCategories.Media,
    properties: {
      src: {
        type: PropControlTypes.string,
        placeholder: 'Video url',
        required: true,
      },
      hideControls: {
        type: PropControlTypes.boolean,
        label: 'Hide controls',
      },
      playbackRate: {
        type: PropControlTypes.number,
        placeholder: 'playback rate',
      },
      startTime: {
        type: PropControlTypes.number,
        placeholder: 'Start playback from',
      },
      readOnly: {
        type: PropControlTypes.boolean,
        label: 'Read only',
      },
      initial: {
        type: PropControlTypes.timelineRange,
        title: 'Initial value',
      },
    },
    defaults: {
      playbackRate: 1,
      src: 'https://www.youtube.com/watch?v=PXi3Mv6KMzY',
    },
  },
};
