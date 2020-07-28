import { useState } from 'react';
import { createStage } from '../gameHelpers';
import { create } from 'domain';

export const useStage = () => {
    const [stage, setStage] = useState(createStage())

    return [stage, setStage]
}